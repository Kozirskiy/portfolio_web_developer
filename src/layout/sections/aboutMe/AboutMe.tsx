import styled from "styled-components";
import {TextComponent} from "../../../compponents/textComponent/TextComponent.tsx";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import {ItemAbout} from "../../../compponents/itemAbout/ItemAbout.tsx";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";
import {TitleSection} from "../../../compponents/title/TitleSection.tsx";
import {font} from "../../../compponents/styles/Common.tsx";
import {themeForProject} from "../../../compponents/styles/Theme.tsx";

export const AboutMe = () => {
    return (
        <>
            <AboutMeStyled>
                <ContainerStyled>
                    <TitleSection textTitle={'About me:'}/>
                    <TextComponent textComponentP={'Hi, my name is Oleksandr Kozyrskyi, i am a Fullstack web developer'}
                        fontSizeTextText={'18px'}
                    />

                    <FlexWrapper align={'center'} marginBottomStyle={'25px'} >

                        <StyledSpan>5+</StyledSpan>
                        <StyledSpanP>Years of experience. Specialised in building apps, while ensuring a seamless web
                            experience for end users.
                        </StyledSpanP>


                        {/*<TextComponent*/}
                        {/*    textComponentP={'Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.'}*/}
                        {/*    fontSizeText={'24px'}*/}
                        {/*/>*/}
                    </FlexWrapper>

                    <FlexWrapper wrap={'wrap'} direction={'norow'} justify={'space-between'}>
                        <ItemAbout iconId={"rulen1iconSVG"} textItemAbout={'UI & UX DESIGNING'}/>
                        <ItemAbout iconId={"codeIconAboutMeSVG"} textItemAbout={'web development'}/>
                        <ItemAbout iconId={"androidIconAboutMeSVG"} textItemAbout={'mobile development'}/>
                        <ItemAbout iconId={"jsNodeJsServiceSVG"} textItemAbout={'Program development'}/>
                    </FlexWrapper>
                </ContainerStyled>

            </AboutMeStyled>
        </>

    );
};

const StyledSpan = styled.span`
    ${font({family: "'Poppins', sans serif", weight: 400, Fmax: 96, Fmin: 36, color: themeForProject.colors.fontColor})}
   
    font-weight: 600;
    color: #7562E0;
    margin-right: 22px;
    @media ${themeForProject.media.mobile} {
        margin-right: 10px;
    }
    
`

const StyledSpanP = styled.span`
    ${font({family: "'Poppins', sans serif", weight: 400, Fmax: 24, Fmin: 12, color: themeForProject.colors.fontColor})}
    display: flex;
    text-align: start;
    align-items: flex-start;
    line-height: 1.6;
    
    @media  ${themeForProject.media.tablet} {
        max-width: 100%;
    }
    @media ${themeForProject.media.mobile} {
        width: 230px;
        max-width: 100%;
    }
`
const AboutMeStyled = styled.section`
    ${FlexWrapper} {
        @media ${themeForProject.media.lapTopMini} {
            justify-content: space-around;
            gap: 20px;
        }
        @media ${themeForProject.media.mobile} {
            justify-content: space-around;
            gap: 20px;
        }
    }
`

