import styled from 'styled-components'
import CardLista from '../Components/CardLista'
import livroPNG from '../Imagens/livro.png'
import { useState, useEffect } from 'react'
import { deleteFavoritos, getFavoritos } from '../Servicos/Favoritos'

const AppContainer = styled.div`
  margin: auto;
  padding-top: 150px;
  width: 70%;
  height: 80%;
  overflow: auto;
  &::-webkit-scrollbar-thumb{
      background-color: #a4b4c4;
      border-radius: 5px;
  }
  &::-webkit-scrollbar{
      background-color: #344464;
      width: 5px;
      border-radius: 5px;
  }
`

function Favoritos() {
    const [ favoritosPesquisados, setFavoritosPesquisados ] = useState([])
    
    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
      const favoritosAPI = await getFavoritos()
      setFavoritosPesquisados(favoritosAPI)
    }

    async function deleteFavorito(id) {
      await deleteFavoritos(id)
      await fetchLivros()
      alert(`livro de id:${id} deletado`)
    }

  return (
    <AppContainer>
      {
        favoritosPesquisados.map( livro => (
          <CardLista  click={ () => deleteFavorito(livro.id) }
                      key={livro.id}
                      livroPNG={livroPNG}
                      titulo={livro.titulo}
                      autor={livro.autor}
                      altIMG="Capa do livro"
                      ano={livro.ano_publicacao}
                      linguagem={livro.linguagem}
                      categoria={livro.categoria}
          />
        ))
      }
    </AppContainer>
  );
}

export default Favoritos
