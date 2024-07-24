import perfil from '../../Imagens/perfil.svg'
import sacola from '../../Imagens/sacola.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListaComponent = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    li {
        cursor: pointer;
    }
`

const itensDeNavegacao = [ 'CATEGORIAS', 'ESTANTE', 'FAVORITOS' ]
const iconsDeNavegacao = [ 'LOGIN', 'SACOLA' ]
const icons = [ perfil, sacola ]

const Lista = ( props ) => {

    if (props.type === 'itens') {
        return(
            <ListaComponent>
                { 
                    itensDeNavegacao.map( (item, i) => <Link key={i} to={`${ item.toLowerCase() }`}><li><p>{item}</p></li></Link> )
                }
            </ListaComponent>
        )
    }
    if (props.type === 'icons') {
        return(
            <ListaComponent>
                {
                    iconsDeNavegacao.map( (item, i) => <Link key={i} to={`${ item.toLowerCase() }`}>{item === 'LOGIN' ? <li><img src={icons[0]} alt={item} /></li> : <li><img src={icons[1]} alt={item} /></li> }</Link> )
                }
            </ListaComponent>
        )
    }

}

export default Lista