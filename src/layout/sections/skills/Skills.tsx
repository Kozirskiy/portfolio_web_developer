import styled from "styled-components";
import {TitleSection} from "../../../compponents/title/TitleSection.tsx";
import {ContainerStyled} from "../../../compponents/container/Container.styled.tsx";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import {ItemSkill} from "../../../compponents/itemSkill/ItemSkill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <ContainerStyled>

                <TitleSection textTitle={'Skills:'}/>

                <FlexWrapper wrap={'wrap'} justify={'space-between'} direction={'norow'}>

                    <ItemSkill iconId={'rulen1iconSVG'} textSkillTitle={'UI & UX DESIGNING'}
                               textSkill={'I design beautiful web iterfaces with Figma and Adove XD'}/>

                    <ItemSkill iconId={'codeIconAboutMeSVG'} textSkillTitle={'WEB DEVELOPMENT'}
                               textSkill={'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'}/>

                    <ItemSkill iconId={'androidIconAboutMeSVG'} textSkillTitle={'MOBILE DEVELOPMENT'}
                               textSkill={'I am an expert mobile developer. I have experience using Flutter and React Native'}/>


                    <ItemSkill iconId={'gitIconServiceSVG'} textSkillTitle={'VERSION CONTROL'}
                               textSkill={'I can use version control systems well, and Git & Mecurial are my go-to tool.'}/>

                    <ItemSkill iconId={'jsNodeJsServiceSVG'} textSkillTitle={'NPM AND NODEJS'}
                               textSkill={'I am an web developer. I have experience using Node JS'}/>

                    <ItemSkill iconId={'sliderWebScrapingIconServiceSVG'} textSkillTitle={'WEB SCRAPING'}
                               textSkill={'I can collect content and data from the internet then manipulate and analyze as needed.'}/>

                </FlexWrapper>
            </ContainerStyled>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
`
