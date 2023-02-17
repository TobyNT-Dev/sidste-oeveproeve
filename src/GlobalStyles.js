import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`${css`

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
body {
    min-height: 100%;
    overflow: hidden;
    overflow-y: scroll;
}
#root {
    width: 100vw;
    min-height: 100%;
}
* {
    box-sizing: border-box;
}
img {
    display: block;
}

`}`