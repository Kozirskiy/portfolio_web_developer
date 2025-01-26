import styled from "styled-components";
type TitleTextForCardStyledProsType = {
    widthTitle?: string
    marginBottom?: string
    marginTopTitle?: string
    fontSizeText?: string
    fontWeihtText?: string
    colorText?: string
}
export const TitleTextForCardStyled = styled.h3<TitleTextForCardStyledProsType>`
    width: ${props => props.widthTitle || undefined};
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTopTitle || '12px'};
    font-size: ${props => props.fontSizeText || '24px'};
    font-weight: ${props => props.fontWeihtText || '600'};
    color: ${props => props.colorText || '#fff'};
    
`
