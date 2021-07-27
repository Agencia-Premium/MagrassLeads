import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  :root {
    --background: #00B5B3;
    --background-black: #313131;
    font-size: 62.5%;
  } 
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font: 14px Roboto, sans-serif;
    background: var(--background);
  } 
`;
