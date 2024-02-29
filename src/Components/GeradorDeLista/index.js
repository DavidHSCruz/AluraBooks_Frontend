import styled from "styled-components"
import { useState, useEffect } from "react"
import { getLivros } from "../../Servicos/Livros"
import Fuse from 'fuse.js'
import livroPNG from '../../Imagens/livro.png'
import CardLista from "../CardLista"
import { postFavoritos } from "../../Servicos/Favoritos"

const ListaContainer = styled.section`
    width: 80%;
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

const GeradorDeLista = ({ textoDigitado }) => {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
    
    const opcoesPesquisa = {
        keys: ['nome', 'autor'],
        includesScore: true,
        threshold: 0.4
    }
    useEffect(() => {
        fetchLivros(textoDigitado)
    }, [textoDigitado])

    async function fetchLivros(textoDigitado) {
        const livrosAPI = await getLivros()
        const fuse = new Fuse(livrosAPI, opcoesPesquisa)
        const resultadoPesquisa = fuse.search(textoDigitado)
        setLivrosPesquisados(resultadoPesquisa)
    }

    async function insertFavorito(id) {
        await postFavoritos(id)
        alert(`livro de id:${id} inserido`)
    }

    return(
        <ListaContainer key='lista'>
            { 
                livrosPesquisados.map(livro => (
                    <CardLista  click={ () => insertFavorito(livro.item.id) }
                                key={livro.item.id}
                                livroPNG={livroPNG}
                                titulo={livro.item.titulo}
                                autor={livro.item.autor}
                                altIMG="Capa do livro"
                    />
                ))
            }
        </ListaContainer>
    )
}

export default GeradorDeLista