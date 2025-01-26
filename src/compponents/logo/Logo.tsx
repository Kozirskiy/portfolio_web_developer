import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLink href="#">
            <Icon width="32" height="17" viewBox="0 0 32 17" iconId={'inittialsIconSVG'} />
        </StyledLink>
    );
};
const StyledLink = styled.a`
    //padding: 10px;
`
