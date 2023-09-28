import Logo from '../Logo'
import Lista from '../Lista'
import styled from 'styled-components'

const NavegacaoContainer = styled.header
    `
        background: #f4f4f4;
        display: flex;
        justify-content: space-between;
        padding: 0 4em;
    `

const Navegacao = () => {
    return(
        <NavegacaoContainer>
            <Logo />
            <Lista type='itens' />
            <Lista type='icons' />
        </NavegacaoContainer>
    )
}

export default Navegacao