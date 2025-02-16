import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {StyledBtn} from "../button/Button.styled.tsx";
import {themeForProject} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";

export const Form = () => {
    return (
        <StyledForm>
            <FlexWrapper direction={'column'}>
                <StyledField placeholder={'Name:'} type="text"/>
                <StyledField placeholder={'Email:'} type="mail"/>
                <StyledFieldTextarea placeholder={'Write your message'} name="" id="textareaId"/>
                <StyledBtn type="submit" primary={true} widthBnt={'174px'} justifyBtn={'center'} alingBtn={'center'} fontSize={'16px'} fontWeightBtn={'medium'}>
                    Send
                </StyledBtn>
            </FlexWrapper>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    width: 100%;
    font-family: 'Poppins', serif;
    gap: 16px;
    
    @media ${themeForProject.media.mobile} {
        max-width: 300px;
        max-width: 90%;
    }
`
const StyledFieldTextarea = styled.textarea`
    resize: none;
    ${font({family: "'Poppins', sans serif", weight: 400, Fmax: 16, Fmin: 14, color: themeForProject.colors.fontColor})}
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: ${themeForProject.colors.colorForItemBg};
    
    max-width: 472px;
    width: 100%;
    
    color: ${themeForProject.colors.fontColor};
    min-height: 98px;
    
    padding: 19px 0 19px 16px;
    border: none;
    font-family: 'Poppins', serif;
    
    &:focus-visible {
        outline: ${themeForProject.colors.colorForItemBg};
    }
    @media ${themeForProject.media.mobile} {
        min-width: 330px;
        width: 100%;
    }
`
const StyledField = styled.input`
    ${font({family: "'Poppins', sans serif", weight: 400, Fmax: 16, Fmin: 14, color: themeForProject.colors.fontColor})}
    margin-bottom: 16px;
    border-radius: 8px;
    border: none;
    background-color: ${themeForProject.colors.colorForItemBg};
    max-width: 472px;
    width: 100%;
    height: 62px;
    padding: 19px 0 19px 16px;
    color: ${themeForProject.colors.fontColor};

    input:active {
        outline: none;
    }
    @media ${themeForProject.media.mobile} {
        min-width: 330px;
        width: 100%;
    }

`
