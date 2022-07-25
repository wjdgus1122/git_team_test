import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 120px",
  mainColor: "#FF00AA",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: #1d1d1d;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
