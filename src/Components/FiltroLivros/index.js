import styled from "styled-components"
import { useState, useEffect } from "react"
import { getLivros } from "../../Servicos/Livros"
import Fuse from 'fuse.js'

const FiltroContainer = styled.section`
    width: 80%;
    height: 80%;
    overflow: hidden;
    color: #f4f4f4;
`

const CardComponent = styled.div`
    display: flex;
    align-items: center;
    background-color: #0005;
    margin-bottom: 5px;
    width: 100%;
`

const CardDescricao = styled.div`
        line-height: 10px;

`

const FiltroLivros = ({ textoDigitado }) => {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
    
    const opcoesPesquisa = {
        keys: ['nome', 'autor'],
        includesScore: true,
        threshold: 0.4
    }
    useEffect(() => {
        fetchLivros()
    }, [textoDigitado])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        const fuse = new Fuse(livrosAPI, opcoesPesquisa)
        const resultadoPesquisa = fuse.search(textoDigitado)
        setLivrosPesquisados(resultadoPesquisa)
    }


    return(
        <FiltroContainer>
            { livrosPesquisados.map(livro => (
                    <CardComponent>
                        <img src="" alt="Capa do livro" />
                        <CardDescricao>
                            <h3>{livro.item.nome}</h3>
                            <p>{livro.item.autor}</p>
                        </CardDescricao>
                    </CardComponent>
            )
            ) }
        </FiltroContainer>
    )
}

export default FiltroLivros