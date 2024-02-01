import styled from "styled-components"

const Input = styled.input`
    background-color: #0000;
    color: #d4d4d4;
    width: clamp(200px, 90% , 600px);
    height: 30px;
    padding: 10px 20px;
    border-radius: 30px;
    transition: 250ms;
    &:focus {
        background-color: #f4f4f4ff;
        color: #040404;
        transition: 500ms;
    }
`

export default Input