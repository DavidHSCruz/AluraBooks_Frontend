import styled from 'styled-components'
import Pesquisa  from '../Components/Pesquisa'
import Carrossel from '../Components/Carrossel'
import { PesquisaContext } from '../context/PesquisaContext'
import { useContext } from 'react'

const HomeDivisao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;
`

const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #002F52 35%, #326589);
  @media (max-width: 1024px) {
        display: block;
        & ${HomeDivisao} {
          width: 100%;
          height: 50%;
        }
    }
`

function Home() {

  const { texto } = useContext(PesquisaContext)

  return (
    <HomeContainer>
      <HomeDivisao>
        <Pesquisa />
      </HomeDivisao>
      <HomeDivisao>
        { texto === false ? <Carrossel /> : <p>Filtro</p> }
      </HomeDivisao>
    </HomeContainer>
  );
}

export default Home
