import styled from 'styled-components'

const CardDescricao = styled.div`
    position: relative;
    color: #f4f4f4;
    padding: 5px 15px;
    line-height: 0;
    bottom: -25%;
    width: 100%;
    height: 20%;
    background-color: #00002099;
    transition: 500ms ease-in-out 250ms;
    > p {
        line-height: .2em;
        font-size: .8em;
    }
`

const CardContainer = styled.div`
    display: flex;
    align-items: end;
    margin: 5px;
    width: 191px;
    height: 263px;
    background-size: 100%;
    background-image: url(${props => props.imgLivro});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    scroll-snap-align: center;
    &:hover ${CardDescricao} {
        bottom: 0;
    }
`

const Card = (props) => {
    return(
        <CardContainer className='card' imgLivro={props.imgLivro} draggable='false'>
            <CardDescricao>
                <h3>Título</h3>
                <p>Autor</p>
            </CardDescricao>
        </CardContainer>
    )
}

export default Card