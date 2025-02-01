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

    &:hover {
        scale: 1.3;
        transition: 2s;
        transform: translateX(5px);
    }

    & {
        @keyframes pulseGlow {
            0% {
                box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
            }
            50% {
                box-shadow: 0 0 20px rgb(182, 65, 255);
            }
            //100% {
            //    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
            //}
            100% {
                box-shadow: 0 0 5px rgb(117, 98, 224, 0.5);
            }
        }
    }

    & {
        background: unset;
        
        padding: 5px;
        border-radius: 50% 0;
        text-align: center;
        //font-size: 20px;
        animation: pulseGlow 5s infinite alternate ease-in-out;
    }
`
