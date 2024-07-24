import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import GeradorDeCards from '../GeradorDeCards'
import SetaCarrossel from '../SetaCarrossel'


const CarrosselContainer = styled.div`
    position: relative;
    margin: auto;
    width: max(80%, 200px);
`

const LivrosContainer = styled.div`
    grid-auto-columns: calc(100% / ${prop => prop.quantidadedelivros} - 48px);
    display: grid;
    grid-auto-flow: column;
    gap: 50px;
    align-items: center;
    margin: auto;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: 0;
    &.dragging {
        scroll-snap-type: none;
        scroll-behavior: auto;
    }
    &.dragging > .card {
        cursor: grab;
        user-select: none;
    }
    &::-webkit-scrollbar {
        display: none;
    }
`

const Carrossel = ({ tipo }) => {
    const carrosselRef = useRef(null)
    let isDragging = false, startX, startScrollLeft
    const [carrosselSize, setCarrosselSize] = useState('')
    const [ cardWidth, setCardWidth ] = useState(191)

    useEffect( () => {
        const carrossel = carrosselRef.current

        function windowSize(x = 'size') {
            if (x === 'size') windowSizeTest()
            if (x === 'resize') window.addEventListener('resize', () => { windowSizeTest() })
        }
        function windowSizeTest() {
            
            if (carrossel) {
                const carrosselSize = carrossel.offsetWidth
                setCarrosselSize(Math.floor( carrosselSize / cardWidth ))
            }
        }
        windowSize()

        if (carrossel)  windowSize('resize')

    }, [carrosselSize, cardWidth])

    
    function draggingStart(e) {
        const carrossel = carrosselRef.current

        isDragging = true
        carrossel.classList.add('dragging')
        startX = e.pageX
        startScrollLeft = carrossel.scrollLeft

    }
    function dragging(e) {
        const carrossel = carrosselRef.current

        if (!isDragging) return
        carrossel.scrollLeft = startScrollLeft - (e.pageX - startX)

    }
    function draggingStop() {
        const carrossel = carrosselRef.current

        isDragging = false
        carrossel.classList.remove('dragging')
    }
    
    return(
        <CarrosselContainer>
            <SetaCarrossel 
                side='left'
                carrosselRef={carrosselRef.current}
                cardWidth={cardWidth}
                carrosselSize={carrosselSize}
            />
            <SetaCarrossel 
                side='right'
                carrosselRef={carrosselRef.current}
                cardWidth={cardWidth}
                carrosselSize={carrosselSize}
            />
            <LivrosContainer
                ref={carrosselRef}
                onMouseMove={dragging} 
                onMouseDown={draggingStart} 
                onMouseUp={draggingStop}
                quantidadedelivros={carrosselSize}
            >
                <GeradorDeCards
                    carrosselRef={carrosselRef.current} 
                    tipo={tipo} 
                    setCardWidth={setCardWidth} 
                    carrosselSize={carrosselSize} 
                    cardWidth={cardWidth} 
                />
            </LivrosContainer>
        </CarrosselContainer>
    )
}

export default Carrossel