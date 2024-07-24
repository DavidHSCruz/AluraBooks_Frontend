import GeradorDeCards from "../GeradorDeCards"
import styled from "styled-components"

const FlexContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex: none;
    height: 100%;
    align-content: start;
    justify-content: space-around;
    padding: 100px 10%;
`

const Flex = ({ tipo }) => {
    return(
        <FlexContainer>
            <GeradorDeCards 
                tipo={tipo}
            />
        </FlexContainer>
        
    )
}

export default Flex