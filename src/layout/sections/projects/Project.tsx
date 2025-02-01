import styled from "styled-components";

import {TitleTextForCardStyled} from "../../../compponents/titleTextForCard/TitleTextForCard.styled.tsx";
import {FlexWrapper} from "../../../compponents/FlexWrapper.tsx";
import {StyledBtn} from "../../../compponents/button/Button.styled.tsx";


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

                <TitleTextForCardStyled fontSizeText={'24px'} colorText={'#7562E0'} >
                    {props.projectTitle}
                </TitleTextForCardStyled>


                <TitleTextForCardStyled widthTitle={'287px'} fontSizeText={'18px'} marginBottom={'24px'} >
                    {props.projectText}
                </TitleTextForCardStyled>

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
    width: 343px;
    min-height: 417px;
    border-radius: 8px;
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
