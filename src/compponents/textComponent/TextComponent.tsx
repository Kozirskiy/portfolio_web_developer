import styled from "styled-components";

type TextComponentPropsType = {
    fontSizeText?: string
    colorText?: string
    fontWeight?: string
    textComponentP?: string
    marginBottomTextComponent?: string

}

export const TextComponent = (props: TextComponentPropsType) => {
    return (
        <StyledTextComponent>
            {props.textComponentP}
        </StyledTextComponent>
    );
};

// export const TextComponent = styled.p`
//
// `

const StyledTextComponent = styled.p<TextComponentPropsType>`
    font-size: ${props => props.fontSizeText || '18px'};
    color: ${props => props.colorText || '#ffffff'};
    font-weight: ${props => props.fontWeight || '400'};
    margin-bottom: ${props => props.marginBottomTextComponent || '30px'};
   
`
