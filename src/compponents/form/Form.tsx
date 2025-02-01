import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {StyledBtn} from "../button/Button.styled.tsx";
import {themeForProject} from "../styles/Theme.tsx";

export const Form = () => {
    return (
        <StyledForm>
            <FlexWrapper direction={'column'}>
                {/*<input placeholder={'Name:'} type="text"/>*/}
                {/*<input placeholder={'Email:'} type="mail"/>*/}
                {/*<textarea placeholder={'Write your message'} name="" id=""></textarea>*/}
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
    
`
const StyledFieldTextarea = styled.textarea`
    resize: none;
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: ${themeForProject.colors.colorForItemBg};
    width: 472px;
    color: ${themeForProject.colors.fontColor};
    min-height: 98px;
    padding: 19px 0 19px 16px;
    border: none;
    font-family: 'Poppins', serif;
    
    &:focus-visible {
        outline: ${themeForProject.colors.colorForItemBg};
    }
`
const StyledField = styled.input`
    font-family: 'Poppins', serif;
    margin-bottom: 16px;
    border-radius: 8px;
    border: none;
    background-color: ${themeForProject.colors.colorForItemBg};
    width: 472px;
    height: 62px;
    padding: 19px 0 19px 16px;
    color: ${themeForProject.colors.fontColor};

    input:active {
        outline: none;
    }

`
