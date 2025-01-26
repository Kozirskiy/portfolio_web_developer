import styled from "styled-components";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";
import {TitleSection} from "../../../compponents/title/TitleSection.tsx";
import {TextComponent} from "../../../compponents/textComponent/TextComponent.tsx";
import projImg1 from "../../../assets/images/featuredProject1.png";
import projImg2 from "../../../assets/images/featuredProject2.png";
import projImg3 from "../../../assets/images/featuredProject3.png";
import projImg1X2 from '../../../assets/images/featuredProject1x2.png'
import projImg2X2 from '../../../assets/images/featuredProject2x2.png'
import projImg3X2 from '../../../assets/images/featuredProject3x2.png'
import {Project} from "./Project.tsx";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <ContainerStyled>

                <TitleSection textTitle={'Projects:'}/>

                <TextComponent marginBottomTextComponent={'36px'}
                               textComponentP={'I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects'}/>
                <FlexWrapper justify={'space-between'}>

                    <Project
                        projectImg={`${projImg1} 1x, ${projImg1X2} 2x`}
                        projectTitle={'TWINDER'}
                        projectText={'A live Geolocation app for finding tweets and twitter users around you.'}
                    />

                    <Project projectImg={`${projImg2} 1x, ${projImg2X2} 2x`}

                             projectTitle={'LIVENTS'}
                             projectText={'A live Geolocation app for finding tweets and twitter users around you.'}
                    />

                    <Project projectImg={`${projImg3} 1x, ${projImg3X2} 2x`}

                             projectTitle={'MOOVE'}
                             projectText={'A live Geolocation app for finding tweets and twitter users around you.'}
                    />
                </FlexWrapper>

            </ContainerStyled>
        </StyledProjects>
    );
};

export const StyledProjects = styled.section`
    margin-bottom: 80px;
`


