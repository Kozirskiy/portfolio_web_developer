import styled from "styled-components";

import {TitleTextForCardStyled} from "../../../compponents/titleTextForCard/TitleTextForCard.styled.tsx";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import {StyledBtn} from "../../../compponents/button/Button.styled.tsx";
import {themeForProject} from "../../../compponents/styles/Theme.tsx";
import {font} from "../../../compponents/styles/Common.tsx";
import {TextComponent} from "../../../compponents/textComponent/TextComponent.tsx";


type ProjectStyledProps = {
    projectTitle?: string
    projectText?: string
    projectImg?: string
}
export const Project = (props: ProjectStyledProps) => {
    return (
        <StyledProject>
            <FlexWrapper direction={'column'} justify={'space-between'} paddingStyle={'16px 16px 24px 16px'}>

                <StyledImg srcSet={props.projectImg}>

                </StyledImg>

                <TitleTextForCardStyled fontSizeText={'24px'} colorText={'#7562E0'}>
                    {props.projectTitle}
                </TitleTextForCardStyled>


                <TextComponent textComponentP={props.projectText}/>


                <FlexWrapper justify={'space-between'}>

                    <StyledBtn widthBnt={'154px'} primary={true} fontSize={'16px'} justifyBtn={'center'} >
                        View Live
                    </StyledBtn>

                    <StyledBtn widthBnt={'154px'} outline={true} fontSize={'16px'} justifyBtn={'center'}>
                        Github Repo
                    </StyledBtn>

                </FlexWrapper>

            </FlexWrapper>
        </StyledProject>
    );
};
const StyledProject = styled.div`
    background-color: #31313F;
    max-width: 343px;
    width: 95%;
    min-height: 417px;
    margin-bottom: 20px;
    border-radius: 8px;
    
    ${TitleTextForCardStyled} {
        @media ${themeForProject.media.lapTop} {
            ${font({family: "'Poppins', sans serif", weight: 600, Fmax: 24, Fmin: 18, color: themeForProject.colors.colorPurpleAct})}
        }
    }
    @media ${themeForProject.media.mobile} {
        max-width: 280px;
        width: 99%;
    }
    
    ${StyledBtn} {
        @media ${themeForProject.media.mobile} {
            font-size: 14px;
        }
    }
`
const StyledImg = styled.img`
    border: 2px solid #7562E0;
    border-radius: 8px;
    opacity: 50%;

    &:hover {
        opacity: 100%;
        transition: 2s;
        cursor: pointer;
    }
`
