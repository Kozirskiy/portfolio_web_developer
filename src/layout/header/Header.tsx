import styled from "styled-components";
import {Logo} from "../../compponents/logo/Logo.tsx";
import {Menu} from "../../compponents/menu/Menu.tsx";
import {ContainerStyled} from "../../compponents/container/Container.styled.tsx";
import {FlexWrapper} from "../../compponents/FlexWrapper.tsx";
import {MobileMenu} from "../../compponents/mobileMenu/MobileMenu.tsx";


const items = ['home', 'About', 'Skills', 'Projects', 'Contacts']
// const itemForMe = ['1', '2']

export const Header = () => {
    return (
        <StyledHeader>
            <ContainerStyled>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu menuItem={items}/>
                    <MobileMenu menuItem={items}/>
                </FlexWrapper>
            </ContainerStyled>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #181824;
    //display: flex;
    //justify-content: space-between;
    margin-bottom: 115px;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`




