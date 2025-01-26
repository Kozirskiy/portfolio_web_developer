import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {StyledBtn} from "../button/Button.styled.tsx";

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
`
const StyledFieldTextarea = styled.textarea`
    resize: none;
    margin-bottom: 16px;
    border-radius: 16px;
    background-color: #31313F;
    width: 472px;
    color: #fff;
    min-height: 98px;
    padding: 19px 0 19px 16px;
    border: none;
    font-family: 'Poppins', serif;
    textarea:active {
        outline: none;
    }
`
const StyledField = styled.input`
    font-family: 'Poppins', serif;
    margin-bottom: 16px;
    border-radius: 16px;
    border: none;
    background-color: #31313F;
    width: 472px;
    height: 62px;
    padding: 19px 0 19px 16px;
    color: #fff;

    input:active {
        outline: none;
    }

`
