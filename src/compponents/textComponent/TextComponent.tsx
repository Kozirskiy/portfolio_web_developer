import styled from "styled-components";
import {themeForProject} from "../styles/Theme.tsx";

type TextComponentPropsType = {
    fontSizeTextText?: string
    colorText?: string
    fontWeight?: string
    textComponentP?: string
    marginBottomTextComponent?: string
}

export const TextComponent = (props: TextComponentPropsType) => {
    return (
        <StyledTextComponent {...props}>
            {props.textComponentP}
        </StyledTextComponent>
    );
};

const StyledTextComponent = styled.p<TextComponentPropsType>`
    color: ${props => props.colorText || '#ffffff'};
    line-height: 1.4;
    font-weight: ${props => props.fontWeight || '400'};
    margin-bottom: ${props => props.marginBottomTextComponent || '24px'};
    font-size: ${props => props.fontSizeTextText || "16px"};
    
    
    // @media ${themeForProject.media.lapTopMini} {
    //     font-size: 16px;
    // }
    
    @media ${themeForProject.media.tablet} {
        max-width: 90%;
    }
`

