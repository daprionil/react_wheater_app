import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function NavHeader() {
    return (
        <ComponentNavHeader>
           <NavLink to="/">
                <li>
                    Consultar
                </li>
           </NavLink>
           <NavLink to="/details">
                <li>
                    Detalles
                </li>
           </NavLink>
        </ComponentNavHeader>
    );
}

const ComponentNavHeader = styled.nav`
    text-align: center;
    font-size: 1.2em;
    background: #f3f3f3;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    gap: 10px;
    align-items: center;

    & a{
        color: inherit;
        padding: 10px;
        transition: background .3s ease;
        text-decoration: none;
        & li {
            list-style: none;
            font-weight: bold;
        }

        &:hover{
            background: #e4e4e4;
        }
    }
`

export default NavHeader;