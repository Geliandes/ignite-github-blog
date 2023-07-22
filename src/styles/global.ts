import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Nunito', sans-serif;
    }

    body {
        background: ${props => props.theme["base-background"]};
        -webkit-font-smoothing: antialiased;
        color: ${props => props.theme["base-title"]};
    }

    h1, h2, h3, h4, h5, p, span {
        -webkit-font-smoothing: antialiased;
        line-height: 1.6;
    }

    span {
        color: ${props => props.theme["base-span"]};
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme["base-post"]};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${props => props.theme.blue};
  }

`