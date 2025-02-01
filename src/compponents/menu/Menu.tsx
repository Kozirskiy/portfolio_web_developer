import styled from "styled-components";
import {themeForProject} from "../styles/Theme.tsx";

export const Menu = (props: { menuItem: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItem.map((it: string, index: number) => {
                    return <li key={index}>
                        <a href="">{it}</a>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

    ul {
        display: flex;
        gap: 40px;
    }

    ul li a {
        text-decoration: none;
        color: ${themeForProject.colors.fontColor};
    }

    a:hover {
        cursor: pointer;
        color: ${themeForProject.colors.colorPurpleAct};
        transition: 1s;
        box-shadow: 2px 2px 2px ${themeForProject.colors.fontColor};
    }
`
