import logo from '../../Imagens/logo.svg'
import styled from 'styled-components'

const LogoComponent = styled.div
    `
        display: flex;
        gap: 10px;
        font-size: 2em;
        line-height: .5em;
    `

const Logo = () => {
    return(
        <LogoComponent>
          <img src={logo} alt="Logo da Alura books" />
          <p> <strong>Alura</strong>Books</p>
        </LogoComponent>
    )
}

export default Logo