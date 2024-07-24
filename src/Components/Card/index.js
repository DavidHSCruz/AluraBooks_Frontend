import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const CardDescricao = styled.div`
    position: relative;
    color: #f4f4f4;
    padding: 5px;
    bottom: -25%;
    width: 100%;
    height: 20%;
    background-color: #00002099;
    overflow: hidden;
    transition: 500ms ease-in-out 250ms;
    > h5 {
        margin-top: -1px;
    }
`

const CardContainer = styled.div`
    display: flex;
    align-items: end;
    margin: 5px;
    width: 191px;
    height: 263px;
    background-size: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    scroll-snap-align: start;
    &:hover ${CardDescricao} {
        bottom: 0;
    }
`

const Card = ({ imgLivro, titulo, carrosselRef, setCardWidth, carrosselSize }) => {
    const cardRef = useRef(null)

    useEffect( () => {
        const carrossel = carrosselRef
        const card = cardRef.current

        function windowSize(x = 'size') {
            if (x === 'size') windowSizeTest()
            if (x === 'resize') window.addEventListener('resize', () => { windowSizeTest() })
        }
        function windowSizeTest() {
            setCardWidth(card.offsetWidth)
        }
        if(setCardWidth) windowSize()

        if (carrossel)  windowSize('resize')

    }, [carrosselSize])

    return(
        <CardContainer ref={cardRef} className='card' img={imgLivro} draggable='false'>
            <CardDescricao>
                <h5>{titulo}</h5>
            </CardDescricao>
        </CardContainer>
    )
}

export default Card