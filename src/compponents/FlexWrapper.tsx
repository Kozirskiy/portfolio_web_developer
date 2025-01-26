import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    widthStyle?: string
    heightStyle?: string
    bgColor?: string
    paddingStyle?: string
    marginBottomStyle?: string
    textAlign?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    width: ${props => props.widthStyle};
    min-height: ${props => props.heightStyle};
    background-color: ${props => props.bgColor};
    padding: ${props => props.paddingStyle};
    margin-bottom: ${props => props.marginBottomStyle};
    height: 100%;
    text-align: ${props => props.textAlign || undefined};
`