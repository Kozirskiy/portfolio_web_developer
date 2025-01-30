import styled from "styled-components";
// import {TitleSectionStyled} from "../../../compponents/title/TitleSection.tsx";
import {TextComponent} from "../../../compponents/textComponent/TextComponent.tsx";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
// import {Icon} from "../../../compponents/icon/Icon.tsx";
import {ItemAbout} from "../../../compponents/itemAbout/ItemAbout.tsx";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";
import {TitleSection} from "../../../compponents/title/TitleSection.tsx";

export const AboutMe = () => {
    return (
        <>
            <AboutMeStyled>
                <ContainerStyled>
                    <TitleSection textTitle={'About me:'}/>
                    <TextComponent fontSizeText={'18px'}
                                   textComponentP={'Hi, my name is Oleksandr Kozyrskyi, i am a web developer.'}/>

                    <FlexWrapper align={'center'}>

                        {/*<TextComponent fontSizeText={'96px'} fontWeight={'800'}*/}
                        {/*               colorText={'#7562E0'}/>*/}

                        <StyledSpan>5+</StyledSpan>
                        <StyledSpanP>Years of experience. Specialised in building apps, while ensuring a seamless web
                            experience for end users.
                        </StyledSpanP>


                        {/*<TextComponent*/}
                        {/*    textComponentP={'Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.'}*/}
                        {/*    fontSizeText={'24px'}*/}
                        {/*/>*/}
                    </FlexWrapper>

                    <FlexWrapper>
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
    font-size: 96px;
    font-weight: 800;
    color: #7562E0;
`
const StyledSpanP = styled.span`
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: flex-start;
`
const AboutMeStyled = styled.section`
    
`

