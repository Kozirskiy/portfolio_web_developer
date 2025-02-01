import styled, {css} from "styled-components";
import {themeForProject} from "../styles/Theme.tsx";

export const MobileMenu = (props: { menuItem: Array<string> }) => {
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={true}>
                <span></span>

            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul>
                    {props.menuItem.map((it: string, index: number) => {
                        return <li key={index}>
                            <a href="">{it}</a>
                        </li>
                    })}
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
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
    display: none;
    @media ${themeForProject.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${themeForProject.colors.fontColor};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${themeForProject.colors.fontColor};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                color: rgba(255, 255, 255, 0);
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            background-color : ${themeForProject.colors.fontColor};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                color: rgba(255, 255, 255, 0);
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}

        }
    }
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: rgba(76, 76, 76, 0.9);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 40px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`