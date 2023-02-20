import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* *** GENERAL CSS *** */
    html {
      height: 100%;
      scroll-behavior: smooth;
    }
    
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      transition: all 0s ease;
    }
    
    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
      font-family: "Fraunces 9pt", "Arial", sans-serif;
    }
    
    main {
      flex-grow: 1;
    }
    
    img {
      vertical-align: middle;
      object-fit: cover;
    }
    /* *** GENERAL END *** */
    .container{ 
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
    }
`;
