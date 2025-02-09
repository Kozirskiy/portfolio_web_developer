import {themeForProject} from "./Theme.tsx";

type  FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number

    Fmin?: number
    Fmax?: number
}


export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || themeForProject.colors.fontColor};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px) / (1360 - 480) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;

// font-size: calc((100vw - 360px) / (1360 - 480 ) * (52 - 36) + 16px)