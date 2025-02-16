import {createGlobalStyle} from "styled-components";
import {themeForProject} from "./Theme.tsx";



export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${themeForProject.colors.primaryBg};
        font-size: 18px;
        color: ${themeForProject.colors.colorPurpleAct};
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        
        min-width: 360px;
    }
    
    section {
        margin-bottom: 100px;
        @media ${themeForProject.media.lapTopMini} {
            margin-bottom: 50px;
        }
    }
    //main {
    //    margin-bottom: 80px;
    //}

    h1, h2, h3, h4, h5, h6, p {
        //font-size: inherit;
        //font-weight: inherit;
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
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }
     p {
         line-height: 1.4;
         font-size: 18px;
     }


    // from site about


    /* Common */

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