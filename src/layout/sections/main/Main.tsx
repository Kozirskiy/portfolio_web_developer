import styled from "styled-components";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import photo from '../../../assets/images/photoDinero.webp'
import {StyledBtn} from "../../../compponents/button/Button.styled.tsx";
import {Icon} from "../../../compponents/icon/Icon.tsx";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";
import {themeForProject} from "../../../compponents/styles/Theme.tsx";
import {font} from "../../../compponents/styles/Common.tsx";

export const Main = () => {

    return (
        <StyledMain>
            <ContainerStyled>
                    <FlexWrapper align={'center'} wrap={'wrap'} direction={'row'} justify={'space-between'}>
                        <StyledOfferInfo>
                            <FlexWrapper direction={'column'} align={'start'} wrap={'wrap'}>
                                <MainSpan>Hello, i’m</MainSpan>
                                <MainH2>Oleksandr Kozyrskyi</MainH2>
                                <div>
                                    <StyledH1>Web developer. I have uniek web experiences.</StyledH1>
                                </div>

                                <StyledBoxBtn>
                                    <StyledBtn alingBtn={'center'} justifyBtn={'center'} widthBnt={'180px'} primary={true}
                                               fontSize={'16px'}>
                                        About me
                                        <StyledSpan>
                                            <Icon iconId={'userIconHeaderButnSVG'} width="24" height="24"
                                                  viewBox="0 0 24 24"/>
                                        </StyledSpan>
                                    </StyledBtn>

                                    <StyledBtn alingBtn={'center'} justifyBtn={'center'} widthBnt={'180px'} outline={true}
                                               fontSize={'16px'}>
                                        Projects
                                        <StyledSpan>
                                            <Icon iconId={'eyeIconHeaderEyeSVG'} width="24" height="24"
                                                  viewBox="0 0 24 24"/>
                                        </StyledSpan>
                                    </StyledBtn>
                                </StyledBoxBtn>
                            </FlexWrapper>
                        </StyledOfferInfo>

                        <StyledBoxImg>
                            <StyledPhoto src={photo} alt="photo OK"/>
                        </StyledBoxImg>
                    </FlexWrapper>
            </ContainerStyled>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    margin-top: 150px;
    min-height: 80vh;
    position: relative;

    &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 128px;
        background-color: #181824;
        bottom: 10%;
        transform: translate(0%, 8%);
        z-index: 33;
        position: absolute;

        @media ${themeForProject.media.lapTop} {
            display: none;
            position: unset;
        }
    }

    ${FlexWrapper} {
        @media ${themeForProject.media.lapTop} {

        }
    }
`
const StyledPhoto = styled.img`
    z-index: 555;
    transform: translate(5%, -7%); /* Центрує зображення */
    
    @media ${themeForProject.media.lapTopMini} {
        scale: 0.8;
        max-width: 90%;
    }
   
    @media ${themeForProject.media.mobile} {
        scale: 0.6;
        position: unset;
        transform: translate(-25%, -15%);
    }
`
const StyledBoxImg = styled.div`
    &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 486px;
        height: 486px;
        border-radius: 50%;
        background-color: #7562E0;
        transform: translate(-95%, 8%); /* Центрує зображення */

        z-index: -5;

        @media ${themeForProject.media.lapTop} {
            display: none;
            
        }
    }
`
const StyledSpan = styled.span`
    margin-left: 10px;

    &:hover {
        transform: rotate(360deg);
        transition: 2s;
    }
`
const StyledBoxBtn = styled.div`
    @media ${themeForProject.media.lapTop} {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
const MainSpan = styled.span`
    ${font({family: "'Poppins', sans serif", weight: 600, Fmax: 32, Fmin: 24, color: themeForProject.colors.fontColor})}
    margin-bottom: 11px;
`
const MainH2 = styled.h2`

    // use mixin for font
    ${font({family: "'Poppins', sans serif", weight: 600, Fmax: 52, Fmin: 26, color: themeForProject.colors.fontColor})}

    margin-bottom: 10px;
    color: ${themeForProject.colors.fontColor};
`

const StyledOfferInfo = styled.div`
    
${FlexWrapper} {
    justify-content: start;
    
}
`
const StyledH1 = styled.h1`
    ${font({family: "'Poppins', sans serif", weight: 600, Fmax: 18, Fmin: 12, color: themeForProject.colors.fontColor})}
    margin-bottom: 50px;
    color: ${themeForProject.colors.fontColor};

    /* Дозволяє тексту переноситися */
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;

    @media ${themeForProject.media.tablet} {
        max-width: 100%;
        box-sizing: border-box;
    }
`;



