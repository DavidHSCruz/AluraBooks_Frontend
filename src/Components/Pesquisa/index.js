import styled from "styled-components"
import { Titulo, Subtitulo } from "../Titulo"
import Input from "../Input"
import { PesquisaContext } from "../../context/PesquisaContext"
import { useContext } from "react"

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

    return(
        <PesquisaConteiner>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Que tal buscar por livros na nossa estante?</Subtitulo>
            <Input  placeholder='Encontre sua próxima leitura.' 
                    onInput={ evento => setTexto(evento.target.value) }
            />
        </PesquisaConteiner>
    )
}

export default Pesquisa
