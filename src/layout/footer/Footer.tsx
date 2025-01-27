import styled from "styled-components";
import {FlexWrapper} from "../../compponents/FlexWrapper.tsx";
import {ContainerStyled} from "../../compponents/container/Container.styled.tsx";
import {TitleSection} from "../../compponents/title/TitleSection.tsx";
import {TextComponent} from "../../compponents/textComponent/TextComponent.tsx";
import {Icon} from "../../compponents/icon/Icon.tsx";
import {Form} from "../../compponents/form/Form.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <ContainerStyled>
                <FlexWrapper justify={'space-between'}>

                    <StyledFooterContact>
                        <TitleSection textTitle={'Connect with me:'}/>
                        <TextComponent  textComponentP={'Satisfied with me? Please contact me:'}/>
                        <SocialIconList>
                            <SocialIconLink>
                                <SocialIconItem>
                                    <Icon iconId={'instagramIconSVG'} width={'32px'} height={'32px'}/>
                                    <Icon iconId={'facebookIconSVG'} width={'32px'} height={'32px'}/>
                                    <Icon iconId={'emailIconSVG'} width={'32px'} height={'32px'}/>
                                </SocialIconItem>
                            </SocialIconLink>
                        </SocialIconList>
                    </StyledFooterContact>

                    <StyledFooterForm>
                        <TextComponent textComponentP={'Contact me, let’s make magic together:'}
                                       fontWeight={'700'}/>
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
        &:hover {
            cursor: pointer;
        }
`


const StyledFooter = styled.footer`
    margin-bottom: 50px;
`
const StyledFooterContact = styled.div`
    
`
const StyledFooterForm = styled.div`
    p {
        font-size: 24px;
    }
`