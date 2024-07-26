import styled from 'styled-components'
import { GoHeart, GoHeartFill } from "react-icons/go"

const CardComponent = styled.div`
    
    background-color: #0005;
    margin-bottom: 5px;
    width: 100%;
    color: #f4f4f4;
    &>img {
        width: 8em;
    }
    &>div {
        display: flex;
        position: relative;
    }
`

const CardDescricao = styled.div`
    line-height: 1.5em;
    padding: 20px;
    >p{
        margin-top: -15px;
        font-size: .8em;
        line-height: 1.5em;
    }
    >h5{
        margin-top: -15px;
    }
`

const Button = styled.button`
    cursor: pointer;
    position: absolute;
    right: 5px;
    bottom: 5px;
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    color: #f4f4f4;
`

const CardLista = ({ id, livroPNG, titulo, autor, altIMG, ano, linguagem, categoria, click, favoritos }) => {

    function livroFavoritado() {
        const favorito = favoritos.some((livro) => livro.id === id)
        if(favorito) {
            return <Button onClick={click}><GoHeartFill /></Button>
        } else {
            return <Button onClick={click}><GoHeart /></Button>
        }
    }

    return(
        <CardComponent>
            <div>
                <img src={livroPNG} alt={altIMG} />
                <CardDescricao>
                    <h3>{titulo}</h3>
                    <h5>Autor: {autor}</h5>
                    <p>Publicação: {ano}</p>
                    <p>Linguagem: {linguagem}</p>
                    <p>Categoria: {categoria}</p>
                </CardDescricao>
            </div>
            <div>
                {
                    livroFavoritado()
                }
            </div>
        </CardComponent>
    )
}

export default CardLista