import {createGlobalStyle} from "styled-components";
import theme from "./Theme.tsx";


export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #1A1A29;
        color: ${theme.colors.fontColor};
        font-family: "Poppins", serif;
        font-weight: 400;
        font-style: normal;
        line-height: 1.2;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }
    button {
        background-color: unset;
        border: none;
    }

    input:focus, input:active,
    button:focus, button:active,
    textarea:focus, textarea:active {
        outline: none;
    }

    a, a:link, a:visited {
        text-decoration: none;
    }

    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }
    
    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    li {
        text-transform: uppercase;
    }

    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background-color: unset;
        background: none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }


    // from site about


    /* Reset and base styles  */
    //* {
    //    padding: 0px;
    //    margin: 0px;
    //    border: none;
    //}
    //
    //*,
    //*::before,
    //*::after {
    //    box-sizing: border-box;
    //}

    /* Links */


    //


    /* Common */

    //aside, nav, footer, header, section, main {
    //    display: block;
    //}
    //
    
    //
    //ul, ul li {
    //    list-style: none;
    //}
    //
    //img {
    //    vertical-align: top;
    //}
    //
    //img, svg {
    //    max-width: 100%;
    //    height: auto;
    //}
    //
    //address {
    //    font-style: normal;
    //}

    /* Form */

    //input, textarea, button, select {
    //    font-family: inherit;
    //    font-size: inherit;
    //    color: inherit;
    //    background-color: transparent;
    //}
    //
    //input::-ms-clear {
    //    display: none;
    //}
    //

    //

    //
    //button::-moz-focus-inner {
    //    padding: 0;
    //    border: 0;
    //}
    //
    //label {
    //    cursor: pointer;
    //}
    //
    //legend {
    //    display: block;
    //}

`