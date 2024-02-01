import styled from "styled-components"
import { Titulo, Subtitulo } from "../Titulo"
import Input from "../Input"
import { useEffect, useState } from "react"
import { PesquisaContext } from "../../context/PesquisaContext"
import { useContext } from "react"
import { getLivros } from "../../Servicos/Livros"

const PesquisaConteiner = styled.div`
    text-align: center;
    color: #f4f4f4;
    font-size: 1.5em;
    @media (max-width: 1024px) {
        padding: 20% 5% 0 5%;
    }
`

const Pesquisa = () => {
    const { setTexto } = useContext(PesquisaContext)
    const [ livros, setLivros ] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
        console.log(livros)
    }

    return(
        <PesquisaConteiner>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Que tal buscar por livros na nossa estante?</Subtitulo>
            <Input  placeholder='Encontre sua próxima leitura.' 
                    onInput={ evento => setTexto(evento.target.value !== '' ? true : false) }
            />
        </PesquisaConteiner>
    )
}

export default Pesquisa
