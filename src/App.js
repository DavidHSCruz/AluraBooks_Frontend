import Navegacao from './Components/Navegacao';
import styled from 'styled-components';

const AppContainer = styled.div
  `
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #002F52 35%, #326589);

    li {
      list-style: none;
    }
  `

function App() {
  return (
    <AppContainer>
      <Navegacao />
    </AppContainer>
  );
}

export default App;
