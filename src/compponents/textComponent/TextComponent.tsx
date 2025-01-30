import styled from "styled-components";

type TextComponentPropsType = {
    fontSizeTextText?: string
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

const StyledTextComponent = styled.p<TextComponentPropsType>`
    color: ${props => props.colorText || '#ffffff'};
    font-size: ${props => props.fontSizeTextText || undefined};
    line-height: 1.4;
    font-weight: ${props => props.fontWeight || '400'};
    margin-bottom: ${props => props.marginBottomTextComponent || undefined};
`

