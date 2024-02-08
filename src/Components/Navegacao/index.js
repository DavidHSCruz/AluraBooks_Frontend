import Logo from '../Logo'
import Lista from '../Lista'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavegacaoContainer = styled.header`
    background: #f4f4f4;
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: center;
    padding: 0 4em;
    z-index: 99;
`

const Navegacao = () => {
    return(
        <NavegacaoContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <Lista type='itens' />
            <Lista type='icons' />
        </NavegacaoContainer>
    )
}

export default Navegacao