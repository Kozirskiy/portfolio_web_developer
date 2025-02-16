import styled from "styled-components";

type TitleSectionPropsType = {
    fontSize?: string
    colorFont?: string
    textTitle?: string
}

export const TitleSection = (props: TitleSectionPropsType) => {
    return (
        <TitleSectionStyled {...props}>
            {props.textTitle}
        </TitleSectionStyled>
    );
};

const TitleSectionStyled = styled.h2<TitleSectionPropsType>`
    margin-bottom: 20px;
    line-height: 1.5;
    font-weight: 600;
    font-size: ${props => props.fontSize || undefined};
    color: ${props => props.color || '#7562E0'};
`
