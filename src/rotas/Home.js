import styled from 'styled-components'
import { useEffect } from 'react'
import { usePesquisaValue } from '../context/PesquisaContext'
import Pesquisa  from '../Components/Pesquisa'
import Carrossel from '../Components/Carrossel'
import GeradorDeLista from '../Components/GeradorDeLista'

const HomeDivisao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 85px;
  height: calc(100% - 85px);
`

const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
        display: block;
        & ${HomeDivisao} {
          width: 100%;
          height: 50%;
          margin-top: 0;
        }
    }
`

function Home() {

  const { texto, setTexto } = usePesquisaValue()

  useEffect(() => {
    setTexto('')
  }, [])


  return (
    <HomeContainer>
      <HomeDivisao>
        <Pesquisa />
      </HomeDivisao>
      <HomeDivisao>
        { texto === '' ? <Carrossel tipo='destaques'/> : <GeradorDeLista textoDigitado={texto}/> }
      </HomeDivisao>
    </HomeContainer>
  );
}

export default Home
