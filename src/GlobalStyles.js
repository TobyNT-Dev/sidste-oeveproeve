import { createGlobalStyle, css } from "styled-components";

import ORegular from "./Assets/Font/Odibee Sans v2/OdibeeSans-Regular.woff"

export const GlobalStyles = createGlobalStyle`${css`

@font-face {
    font-family: "Odibee";
    src: url(${ORegular})
}
html, body {
    margin: 0;
    padding: 0;
}

`}`