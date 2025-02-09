import {useState, useEffect} from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import photo from '../../../assets/images/photoDinero.webp'
import {StyledBtn} from "../../../compponents/button/Button.styled.tsx";
import {Icon} from "../../../compponents/icon/Icon.tsx";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";
import {themeForProject} from "../../../compponents/styles/Theme.tsx";
import {font} from "../../../compponents/styles/Common.tsx";

export const Main = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [opacity, setOpacity] = useState(1);
    // const [loading, setLoading] = useState(true);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
        setOpacity(Math.max(1 - window.scrollY / 500, 0)); // Зменшення прозорості при прокрутці
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // setTimeout(() => setLoading(false), 1500); // Симуляція завантаження
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // if (loading) {
    //     return (
    //         <PreloaderWrapper>
    //             <Loader />
    //         </PreloaderWrapper>
    //     );
    // }

    return (
        <StyledMain>
            <ContainerStyled>

                <FlexWrapper align={'center'} wrap={'wrap'} direction={'row'} justify={'space-between'}>
                    <StyledOfferInfo>
                        <FlexWrapper direction={'column'} align={'start'} wrap={'wrap'}>
                            <MainSpan>Hello, i’m</MainSpan>
                            <MainH2>Oleksandr Kozyrskyi</MainH2>
                            <div>
                                <StyledH1>Web developer. I have seamless web experiences.</StyledH1>
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

// const PreloaderWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background-color: rgb(24, 24, 36);
//
// `;
//
// const Loader = styled.div`
//     width: 50px;
//     height: 50px;
//     border: 5px solid rgb(255, 255, 255);
//     border-top: 5px solid #413880;
//     border-radius: 50%;
//     animation: spin 0.5s linear infinite;
//
//     @keyframes spin {
//         0% {
//             transform: rotate(0deg);
//         }
//         100% {
//             transform: rotate(360deg);
//         }
//     }
// `;

/*second wrapper*/
// const StyledFlexGlobalWrapper = styled(FlexWrapper)`
//
//     @media ${themeForProject.media.tablet} {
//
//     }
//
// `


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
`
const StyledSpan = styled.span`
    margin-left: 10px;

    &:hover {
        transform: rotate(360deg);
        transition: 2s;
    }
`
const StyledBoxBtn = styled.div`

`
const MainSpan = styled.span`
    ${font({family: "'Poppins', sans serif", weight: 600, Fmax: 32, Fmin: 24, color: themeForProject.colors.fontColor})}
    font-weight: 600;
    margin-bottom: 11px;
`
const MainH2 = styled.h2`

    // use mixin for font
    ${font({family: "'Poppins', sans serif", weight: 600, Fmax: 52, Fmin: 36, color: themeForProject.colors.fontColor})}

    margin-bottom: 10px;
    color: ${themeForProject.colors.fontColor};
`
const StyledPhoto = styled.img`
    z-index: 555;
    transform: translate(5%, -7%); /* Центрує зображення */
    @media ${themeForProject.media.lapTopMini} {
        scale: 0.75;
    }
    @media ${themeForProject.media.mobile} {
        scale: 0.8;
        position: unset;
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
        
        z-index: -55;
        
        @media ${themeForProject.media.lapTop} {
            display: none;
        }
    }
`

const StyledOfferInfo = styled.div`

`
const StyledH1 = styled.h1`
    ${font({family: "'Poppins', sans serif", weight: 600, Fmax: 18, Fmin: 16, color: themeForProject.colors.fontColor})}
    margin-bottom: 50px;
    color: ${themeForProject.colors.fontColor};
`


