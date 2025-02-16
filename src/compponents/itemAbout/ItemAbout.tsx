import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import styled from "styled-components";
import {TitleTextForCardStyled} from "../titleTextForCard/TitleTextForCard.styled.tsx";
import {themeForProject} from "../styles/Theme.tsx";

type ItemAboutPropsType = {
    iconId: string
    textItemAbout: string
}

export const ItemAbout = (props: ItemAboutPropsType) => {
    return (
        <StyledItemAbout>
            <FlexWrapper direction={'column'}
                         paddingStyle={'24px'} justify={'end'} marginBottomStyle={'20px'}
                         wrap={'wrap'}>
                <Icon iconId={props.iconId}/>

                <TitleTextForCardStyled>
                    {props.textItemAbout}
                </TitleTextForCardStyled>

            </FlexWrapper>
        </StyledItemAbout>

    );
};

const StyledItemAbout = styled(FlexWrapper)`
    width: 256px;
    height: 254px;
    
    text-transform: uppercase;
    background-color: #BDBDBD;
    
    &:hover {
        background-color: #7562E0;
        cursor: pointer;
    }
    @media ${themeForProject.media.lapTopMini} {
        display: flex;
        flex-grap: 1;
    }
`



