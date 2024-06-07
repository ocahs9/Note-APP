//import { Reset } from "styled-reset"; -> 함수형 컴포넌트처럼 사용하는 방법
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; //함수를 사용하는 방식

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    color: ${(props) => props.theme.textColor};
    background-image: ${(props) => props.theme.bgImg};
    background-size : cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  html, body {
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    font-size: 16px;
    transition: background-image 0.5s;
  }
  #root, .App {
    height: inherit;
  } 
  .App {
    position: relative;
  }
  button, input, textarea, select, option {
    font-family: inherit;
    border: 0;
  }
`;

export default GlobalStyle;
