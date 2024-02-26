import styled from 'styled-components'
import Autentificador from '../Components/Autentificador'

const AppContainer = styled.div`
  padding-top: 85px;
  height: calc(100vh - 85px);
  display: flex;
  align-items: center;
  justify-content: center;
`

function Login() {
  return (
    <AppContainer>
      <Autentificador />
    </AppContainer>
  );
}

export default Login
