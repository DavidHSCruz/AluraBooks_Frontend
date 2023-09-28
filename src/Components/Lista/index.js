import perfil from '../../Imagens/perfil.svg'
import sacola from '../../Imagens/sacola.svg'
import styled from 'styled-components'

const ListaComponent = styled.ul
    `
        display: flex;
        gap: 20px;
        align-items: center;
        li {
            cursor: pointer;
        }
    `

const itensDeNavegacao = [ 'CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS' ]
const icons = [ perfil, sacola ]

const Lista = ( props ) => {

    if (props.type === 'itens') {
        return(
            <ListaComponent>
                { itensDeNavegacao.map( item => <li><p>{item}</p></li> ) }
            </ListaComponent>
        )
    }
    if (props.type === 'icons') {
        return(
            <ListaComponent>
                { icons.map( icon => <li><img src={icon} alt={icon} /></li> ) }
            </ListaComponent>
        )
    }

}

export default Lista