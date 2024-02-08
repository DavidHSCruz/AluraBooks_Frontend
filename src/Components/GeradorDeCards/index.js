import Card from '../Card'
import livroPNG from '../../Imagens/livro.png'
import { useState, useEffect } from 'react'
import { getFavoritos } from '../../Servicos/Favoritos'
import { getLivros } from '../../Servicos/Livros'
import { getDestaques } from '../../Servicos/Destaques'

const GeradorDeCards = ({ tipo }) => {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
    const [ favoritosPesquisados, setFavoritosPesquisados ] = useState([])
    const [ destaquesPesquisados, setDestaquesPesquisados ] = useState([])
    
    async function fetchLivros() {
        const livrosAPI    = await getLivros()
        const favoritosAPI = await getFavoritos()
        const destaquesAPI = await getDestaques()
        setLivrosPesquisados(livrosAPI)
        setFavoritosPesquisados(favoritosAPI)
        setDestaquesPesquisados(destaquesAPI)
    }
    
    useEffect(() => {
        fetchLivros()
    }, [])

    switch ( tipo ) {
        case 'favoritos':
            return(
                <>
                    { favoritosPesquisados.map(livro => (
                            <Card 
                                titulo={livro.titulo}
                                autor={livro.autor}
                                imgLivro={livroPNG}
                                key={livro.id}
                            />
                        )
                    )}
                </>
            )

        case 'destaques':
            return(
                <>
                    { destaquesPesquisados.map(livro => (
                            <Card 
                                titulo={livro.titulo}
                                autor={livro.autor}
                                imgLivro={livroPNG}
                                key={livro.id}
                            />
                        )
                    )}
                </>
            )
        
        default:
            return(
                <>
                    { livrosPesquisados.map(livro => (
                            <Card 
                                titulo={livro.titulo}
                                autor={livro.autor}
                                imgLivro={livroPNG}
                                key={livro.id}
                            />
                        )
                    )}
                </>
            )
    }
}


export default GeradorDeCards