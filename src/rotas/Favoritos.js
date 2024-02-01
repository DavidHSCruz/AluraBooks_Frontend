import styled from 'styled-components';
import Carrossel from '../Components/Carrossel';

const AppContainer = styled.div`
  width: 100vw;
  padding-top: 10%;
  height: 100vh;
  background: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favoritos() {
  return (
    <AppContainer>
      <Carrossel />
    </AppContainer>
  );
}

export default Favoritos
