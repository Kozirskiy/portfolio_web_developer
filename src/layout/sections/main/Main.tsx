import { useState, useEffect } from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import photo from '../../../assets/images/photoDinero.webp'
import bgImg from '../../../assets/images/ellipseHeaderBgSVG.svg'
import {StyledBtn} from "../../../compponents/button/Button.styled.tsx";
import {Icon} from "../../../compponents/icon/Icon.tsx";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";
import {themeForProject} from "../../../compponents/styles/Theme.tsx";

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
                <FlexWrapper align={'center'} wrap={'wrap'} direction={'norow'}>
                    <StyledOfferInfo>
                        <FlexWrapper direction={'column'} align={'start'}>
                            <MainSpan>Hello, i’m</MainSpan>
                            <MainH2>Oleksandr Kozyrskyi</MainH2>
                            <div>
                                <StyledH1>Web developer. I have seamless web experiences.</StyledH1>
                            </div>

                            <StyledBoxBtn>
                                <StyledBtn alingBtn={'center'} justifyBtn={'center'} widthBnt={'180px'} primary={true} fontSize={'16px'}>
                                    About me
                                    <StyledSpan>
                                        <Icon iconId={'userIconHeaderButnSVG'} width="24" height="24" viewBox="0 0 24 24"/>
                                    </StyledSpan>
                                </StyledBtn>

                                <StyledBtn alingBtn={'center'} justifyBtn={'center'} widthBnt={'180px'} outline={true} fontSize={'16px'}>
                                    Projects
                                    <StyledSpan>
                                        <Icon iconId={'eyeIconHeaderEyeSVG'} width="24" height="24" viewBox="0 0 24 24"/>
                                    </StyledSpan>
                                </StyledBtn>
                            </StyledBoxBtn>
                        </FlexWrapper>
                    </StyledOfferInfo>

                    <StyledBoxImg>
                        <StyledPhoto src={photo} alt="photo OK" />
                        <StyledPhotoBg
                            src={bgImg}
                            alt="photo"
                            style={{
                                transform: `translate(10%, calc(-40% + ${offsetY * 0.3}px))`,
                                opacity: opacity,
                                transition: "transform 0.2s ease-out, opacity 0.5s ease-out"
                            }}
                        />
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


const StyledMain = styled.main`
    padding-top: 200px;
    min-height: 100vh;
    position: relative;
        &::after {
            content: '';
            display: inline-block;
            width: 100%;
            height: 128px;
            background-color: #181824;
            bottom: 10%;
            transform: translate(0%, 18%);
            z-index: 33;
            position: absolute;
        }
    margin-bottom: 80px;
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
    font-weight: 600;
    margin-bottom: 11px;
    font-size: 32px;
    color: ${themeForProject.colors.fontColor};
`
const MainH2 = styled.h2`
    font-weight: 600;
    font-size: 52px;
    margin-bottom: 10px;
    color: ${themeForProject.colors.fontColor};
`
const StyledPhoto = styled.img`
    display: block;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(19%, -50%); /* Центрує зображення */
    height: auto;
`
const StyledPhotoBg = styled.img`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(10%, -40%); /* Центрує зображення */
    height: auto;
    z-index: 1;
    scale: 0.9;
`
const StyledOfferInfo = styled.div`

`

const StyledH1 = styled.h1`
    font-size: 18px;
    margin-bottom: 50px;
    color: ${themeForProject.colors.fontColor};
`

const StyledBoxImg = styled.div`
    display: block;
    position: relative;
   
`
