import { createGlobalStyle } from 'styled-components';
import theme from 'theme/theme';

const GlobalStyles = createGlobalStyle`
    font-size: 16px;

    html {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-variant-ligatures: contextual common-ligatures;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none; 
        -ms-user-select: none;
        user-select: none;
    }

    html, body, #root{
        margin: 0;
        height: 100vh;
        font-size: 16px;
        font-family: ${theme.primaryFont};
        overflow: hidden;
    }
`;

export default GlobalStyles;
