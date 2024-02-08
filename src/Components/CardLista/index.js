import styled from 'styled-components'

const CardComponent = styled.div`
    display: flex;
    align-items: center;
    background-color: #0005;
    margin-bottom: 5px;
    width: 100%;
    color: #f4f4f4;
    >img {
        width: 8em;
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

const CardLista = ({ livroPNG, titulo, autor, altIMG, ano, linguagem, categoria }) => {


    return(
        <CardComponent>
            <img src={livroPNG} alt={altIMG} />
            <CardDescricao>
                <h3>{titulo}</h3>
                <h5>Autor: {autor}</h5>
                <p>Publicação: {ano}</p>
                <p>Linguagem: {linguagem}</p>
                <p>Categoria: {categoria}</p>
            </CardDescricao>
        </CardComponent>
    )
}

export default CardLista