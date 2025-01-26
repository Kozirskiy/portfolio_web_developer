import styled from "styled-components";

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
        color: #7562E0;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
        color: #fff;
        transition: 1s;
        box-shadow: 3px 3px 3px #7562E0;
    }
`
