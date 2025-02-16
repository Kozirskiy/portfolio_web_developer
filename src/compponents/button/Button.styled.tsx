import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    colorBGBtn?: string
    widthBnt?: string
    colorPrimary?: string
    colorSecondary?: string
    fontSize?: string
    primary?: boolean
    outline?: boolean
    displayBtn?: string
    justifyBtn?: string
    alingBtn?: string
    fontWeightBtn?: string
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    box-sizing: border-box;
    display: ${props => props.displayBtn || 'inline-flex'};
    justify-content: ${props => props.justifyBtn || 'start'};
    align-items: center;
    border-radius: 8px;
    
    &:first-child {
        margin-right: 8px;
    }
    height: 48px;
    font-weight: ${props => props.fontWeightBtn || 'bold'};
    font-size: ${props => props.fontSize || '1.1rem'};
    padding: 12px 15px;

    &:hover {
        cursor: pointer;
    }

            //primary
    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.colorBGBtn || '#7562E0'};
        color: white;
        align-items: ${props => props.alingBtn || 'center'};
        width: ${props => props.widthBnt || '144px'};
        &:hover {
            background-color: ${props => props.colorBGBtn || '#413880'};
            
            transition: 1.5s;

        }
    `} 
            
            //outline
    ${props => props.outline && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.colorBGBtn || '#7562E0'};
        background-color: transparent;
        color: white;
        align-items: ${props => props.alingBtn || 'center'};
        width: ${props => props.widthBnt || '144px'};

        &:hover {
            background-color: ${props => props.colorBGBtn || '#7562E0'};
            color: white;
            transition: 1.5s;

        }
    `}


`