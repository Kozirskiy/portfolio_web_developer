import styled from "styled-components";


type ContainerStyledPropsType = {
    widthContainer?: string
    marginContainer?: string

}
export const ContainerStyled= styled.div<ContainerStyledPropsType>`
    max-width: ${props => props.widthContainer || '1140px'};
    margin: ${props => props.marginContainer || 'auto'};
    padding: 0 10px;
    
`