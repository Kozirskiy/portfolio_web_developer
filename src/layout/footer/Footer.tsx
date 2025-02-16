import styled from "styled-components";
import {FlexWrapper} from "../../compponents/FlexWrapper.tsx";
import {ContainerStyled} from "../../compponents/container/Container.styled.tsx";
import {TitleSection} from "../../compponents/title/TitleSection.tsx";
import {TextComponent} from "../../compponents/textComponent/TextComponent.tsx";
import {Icon} from "../../compponents/icon/Icon.tsx";
import {Form} from "../../compponents/form/Form.tsx";
import {themeForProject} from "../../compponents/styles/Theme.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <ContainerStyled>
                <FlexWrapper justify={'space-between'} wrap={'wrap'} direction={'norow'}>
                    <StyledFooterContact>
                        <TitleSection textTitle={'Connect with me:'}/>
                        <TextComponent textComponentP={'Satisfied with me? Please contact me:'} fontSizeTextText={'18px'}/>
                        <SocialIconList>
                            <SocialIconLink>
                                <SocialIconItem>
                                    <Icon iconId={'instagramIconSVG'} width={'32px'} height={'32px'}
                                          viewBox={'0 0 32 32'}/>
                                    <Icon iconId={'facebookIconSVG'} width={'32px'} height={'32px'}
                                          viewBox={'0 0 32 32'}/>
                                    <Icon iconId={'emailIconSVG'} width={'32px'} height={'32px'} viewBox={'0 0 32 32'}/>
                                </SocialIconItem>
                            </SocialIconLink>
                        </SocialIconList>
                    </StyledFooterContact>

                    <StyledFooterForm>
                        <TextComponent textComponentP={'Contact me, let’s make Magic together:'} fontSizeTextText={'24px'}/>
                        <Form/>
                    </StyledFooterForm>
                </FlexWrapper>
            </ContainerStyled>
        </StyledFooter>
    );
};

const SocialIconList = styled.ul`

`
const SocialIconLink = styled.li`

`
const SocialIconItem = styled.a`
    svg {
        margin-right: 16px;

        &:hover {
            cursor: pointer;
            transition: 1s;
            color: #f6eeff;
            scale: 1.2;
            transform: translateY(-5px);
        }
    }



`


const StyledFooter = styled.footer`
    margin-bottom: 50px;
    
`
const StyledFooterContact = styled.div`
    margin-bottom: 30px;
    margin-right: 20px;
`
const StyledFooterForm = styled.div`
    
    @media ${themeForProject.media.lapTopMini} {
        margin: 0 auto;
    }
`