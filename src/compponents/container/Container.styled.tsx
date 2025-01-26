import styled from "styled-components";


type ContainerStyledPropsType = {
    widthContainer?: string
    marginContainer?: string

}
export const ContainerStyled= styled.div<ContainerStyledPropsType>`
    width: ${props => props.widthContainer || '1080px'};
    margin: ${props => props.marginContainer || 'auto'};
    padding: 0 10px;
`