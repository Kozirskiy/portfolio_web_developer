import styled from "styled-components";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import photo from '../../../assets/images/photoDinero.webp'
// import bgImg from '../../../assets/images/ellipseHeaderBgSVG.svg'
import {StyledBtn} from "../../../compponents/button/Button.styled.tsx";
import {Icon} from "../../../compponents/icon/Icon.tsx";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <ContainerStyled>
                <FlexWrapper align={'center'} justify={'space-around'}>
                    <StyledOfferInfo>

                        <FlexWrapper direction={'column'} align={'start'}>
                            <MainSpan>
                                Hello, i’m
                            </MainSpan>

                            <MainH2>
                                Oleksandr Kozyrskyi
                            </MainH2>
                            <div>
                                <StyledH1>
                                    Web developer. I have seamless web experiences.
                                </StyledH1>
                            </div>

                            <StyledBoxBtn>
                                <StyledBtn alingBtn={'center'} justifyBtn={'center'} widthBnt={'180px'} primary={true} fontSize={'16px'}>About me<StyledSpan><Icon
                                    iconId={'userIconHeaderButnSVG'} width="24" height="24" viewBox="0 0 24 24"/></StyledSpan></StyledBtn>

                                <StyledBtn alingBtn={'center'} justifyBtn={'center'} widthBnt={'180px'} outline={true} fontSize={'16px'}>Projects<StyledSpan><Icon
                                    iconId={'eyeIconHeaderEyeSVG'} width="24" height="24" viewBox="0 0 24 24"/></StyledSpan> </StyledBtn>
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
    margin-bottom:11px;
    font-size: 32px;
    
`
const MainH2 = styled.h2`
    font-weight: 600;
    font-size: 52px;
    margin-bottom: 10px;
`
const StyledPhoto = styled.img`
`
const StyledOfferInfo = styled.div`
    
`

const StyledMain = styled.main`
    
`

const StyledH1 = styled.h1`
    font-size: 18px;
    margin-bottom: 50px;
`

const StyledBoxImg = styled.div`

`