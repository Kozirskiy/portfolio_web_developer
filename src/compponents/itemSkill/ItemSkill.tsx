import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Icon} from "../icon/Icon.tsx";
import {TitleTextForCardStyled} from "../titleTextForCard/TitleTextForCard.styled.tsx";
import {TextComponent} from "../textComponent/TextComponent.tsx";

type ItemSkillPropsType = {
    iconId: string
    textSkillTitle: string
    textSkill: string | 'text'
}
export const ItemSkill = (props: ItemSkillPropsType) => {
    return (

        <StyledItemSkill>
            <FlexWrapper direction={'column'}  align={'center'}>
                <Icon iconId={props.iconId}/>
                <TitleTextForCardStyled marginBottom={'16px'}>
                    {props.textSkillTitle}
                </TitleTextForCardStyled>
                <TextComponent textComponentP={props.textSkill}>

                </TextComponent>
            </FlexWrapper>
        </StyledItemSkill>
    );
};

const StyledItemSkill = styled.div`
    border: 3px solid #7562E0;
    width: 341px;
    height: 338px;
    border-radius: 16px;
    background-color: transparent;
    margin-bottom: 16px;
    padding: 75px 22px 1px 22px;

    &:hover {
        border: 3px solid #F5F5F5;
        transition: 2s;
        cursor: pointer;
        border-radius: 5px;
    }
;

&+& {
    
}
nth-of_type(odd) {
    border: 3px solid #F5F5F5;
} nth-of_type(even) {
    border: 3px solid #7562E0;
}



`


