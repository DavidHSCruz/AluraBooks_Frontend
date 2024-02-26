import styled from 'styled-components'
import { useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const AutentificadorContainer = styled.section`
    width: clamp(200px, 80%, 600px);
    &>div{
        
    }
    &>div>form{
        width: 80%;
    }
    &>div>form>label{
        display: block;
        margin: 25px 0;
    }
    &>div>form>label>h5{
        margin: 20px 25px;
    }
    &>div>form>label>input{
        color: #545454;
    }
`
const LoginContainer = styled.div`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    background: #f4f4f4;
    padding: 40px;
    border-radius: 25px;
`
const LoginSelecao = styled.div`
    display: flex;
    justify-content: center;
    &>p{
        cursor: pointer;
        font-size: .8em;
        font-weight: 500;
        color: #f4f4f4;
        padding: 10px;
        margin: 0;
        border-radius: 25px 25px 0 0;
        &:hover{
            background-color: #c4c4c4;
            color: #545454;
        }
        &.login, &.cadastro{
            background-color: #f4f4f4;
            color: #545454;
            cursor: auto;
        }
    }
`

const Autentificador = () => {
    const [ pagina, setPagina ] = useState('LOGIN')
    return(
        <AutentificadorContainer>
            <LoginSelecao>
                <p onClick={() => setPagina('LOGIN')} className={pagina === 'LOGIN'? 'login' : ''}>LOGIN</p>
                <p onClick={() => setPagina('CADASTRO')} className={pagina !== 'LOGIN'? 'cadastro' : ''}>CADASTRE-SE</p>
            </LoginSelecao>
            <LoginContainer>
                <Login pag={pagina}/>
            </LoginContainer>
        </AutentificadorContainer>
    )
}

const Login = ({ pag }) => {
    if (pag === 'LOGIN') {
        return(
            <form>
                <label>
                    <h5>Usuário:</h5>
                    <Input type='text'/>
                </label>
                <label>
                    <h5>Senha:</h5>
                    <Input type='password'/>
                </label>
                <Button onClick={ e => e.preventDefault() }>ENTRAR</Button>
            </form>
        )
    }else {
        return(
            <form>
                <label>
                    <h5>Usuário:</h5>
                    <Input type='text'/>
                </label>
                <label>
                    <h5>Email:</h5>
                    <Input type='text'/>
                </label>
                <label>
                    <h5>Senha:</h5>
                    <Input type='password'/>
                </label>
                <label>
                    <h5>Confirme a senha:</h5>
                    <Input type='password'/>
                </label>
                <Button onClick={ e => e.preventDefault() }>CADASTRAR</Button>
            </form>
        )
    }
}

export default Autentificador