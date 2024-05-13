import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
 }
 body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #18171F;
 }
`;

export default GlobalStyle;
