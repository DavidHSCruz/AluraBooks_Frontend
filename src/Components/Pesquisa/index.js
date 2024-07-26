import styled from "styled-components"
import { Titulo, Subtitulo } from "../Titulo"
import Input from "../Input"
import { usePesquisaValue } from "../../context/PesquisaContext"

const PesquisaContainer = styled.div`
    text-align: center;
    color: #f4f4f4;
    font-size: 1.2em;
    @media (max-width: 1024px) {
        padding: 20% 5% 0 5%;
    }
`

const Pesquisa = () => {
    const { setTexto } = usePesquisaValue()

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Que tal buscar por livros na nossa estante?</Subtitulo>
            <Input  placeholder='Exemplo: busque por javascript...'
                    onInput={ e => setTexto(e.target.value) }
            />
        </PesquisaContainer>
    )
}

export default Pesquisa
