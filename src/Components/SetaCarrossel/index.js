import { useEffect, useRef } from "react";
import styled from "styled-components"

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

const SetaCarrossel = ({ side, carrosselRef, cardWidth }) => {
    const setaRef = useRef(null)
    const seta = setaRef.current
    
    function clickSeta() {
        carrosselRef.scrollLeft += side === 'left' ? -cardWidth : cardWidth
    }
    
    useEffect(() => {
        function HiddenSeta() {
            if (carrosselRef.scrollLeft === undefined && carrosselRef.offsetWidth === carrosselRef.scrollWidth) {
                seta.style.display = 'none'
            } else {
                seta.style.display = 'block'
            }
        }

        if(carrosselRef) {
            HiddenSeta()
        }

    }, [carrosselRef])

    return (
        <SetaComponent 
            ref={setaRef}
            onClick={clickSeta}
            side={side}>{ side === 'left' ? <>&#60;</> : <>&#62;</> }
        </SetaComponent>
    );
}

export default SetaCarrossel
