import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import GeradorDeCards from '../GeradorDeCards'


const CarrosselContainer = styled.div`
    position: relative;
    margin: auto;
    width: max(80%, 200px);
`

const LivrosContainer = styled.div`
    grid-auto-columns: calc(100% / ${props => props.quantidadeDeLivrosNoCarrossel} - 48px);
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

const SetaComponent = styled.i`
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    background-color: #f4f4f4;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 0 10px #0005;
    user-select: none;
    font-size: 1.2em;
    font-weight: 500;
    line-height: 20px;
    color: #88b;
    right: -15px;
    &:first-child {
        left: -15px;
    }
`

const Carrossel = ({ tipo }) => {
    const carrossel = useRef(null)
    let isDragging = false, startX, startScrollLeft
    const [carrosselSize, setCarrosselSize] = useState('')
    const [ cardWidth, setCardWidth ] = useState(191)

    useEffect( () => { if (carrossel.current)  windowSize('size') }, [])
    useEffect( () => { if (carrossel.current)  windowSize('resize') }, [carrosselSize])

    function windowSize(x) {
        if (x === 'size')   { windowSizeTest() }
        if (x === 'resize') { window.addEventListener('resize', () => { windowSizeTest() })
        }
    }
    function windowSizeTest() {
        if (carrossel.current) {
            const size = carrossel.current.offsetWidth
            setCarrosselSize(Math.floor( size / cardWidth ))
            setTimeout(() => {
                setCardWidth(document.querySelector('.card').offsetWidth)
                HiddenSeta()
            }, 200)
        }
    }
    function draggingStart(e) {
        isDragging = true
        carrossel.current.classList.add('dragging')
        startX = e.pageX
        startScrollLeft = carrossel.current.scrollLeft

    }
    function dragging(e) {
        if (!isDragging) return
        carrossel.current.scrollLeft = startScrollLeft - (e.pageX - startX)

    }
    function draggingStop() {
        isDragging = false
        carrossel.current.classList.remove('dragging')
    }
    function clickSeta() {
        const arrows = document.querySelectorAll('.seta')
    
        arrows.forEach( arrow => {
            const side = arrow.getAttribute('side')
            arrow.addEventListener('click', () => {
                carrossel.current.scrollLeft += side === 'left' ? -cardWidth : cardWidth
            })
        })
    }
    function HiddenSeta() {
        const arrows = document.querySelectorAll('.seta')

        if (carrossel.current.scrollLeft <= 0 && carrossel.current.offsetWidth === carrossel.current.scrollWidth) {
            arrows.forEach( arrow => arrow.style.display = 'none')
        } else {
            arrows.forEach( arrow => arrow.style.display = 'block')
        }
    }
    
    return(
        <CarrosselContainer>
            <SetaComponent 
                className='seta' 
                onClick={clickSeta} 
                side='left'>&#60;
            </SetaComponent>
            <SetaComponent 
                className='seta' 
                onClick={clickSeta} 
                side='right'>&#62;
            </SetaComponent>
            <LivrosContainer
                ref={carrossel}
                onMouseMove={dragging} 
                onMouseDown={draggingStart} 
                onMouseUp={draggingStop}
                quantidadeDeLivrosNoCarrossel={carrosselSize}
            >
                <GeradorDeCards tipo={tipo}/>
            </LivrosContainer>
        </CarrosselContainer>
    )
}

export default Carrossel