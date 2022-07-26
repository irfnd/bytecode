import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";
import "@fortawesome/fontawesome-free";

const GlobalStyles = createGlobalStyle`

  /* Global CSS */
  :root {
    --text-purple: #5e50a1;
    --text-orange: #fbb017;
    --text-black: #1f2a36;
    --text-gray: #46505c;
    --text-silver: #9ea0a5;
    --text-light-gray: #e2e5ed;
    --text-white-smoke: #f6f7f8;
    --text-white: #ffffff;
    --shadow-black-100: 0 5px 15px rgba(0, 0, 0, 0.1);
    --shadow-black-300: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .fs-10 { font-size: 10px }
  .fs-12 { font-size: 12px }
  .fs-14 { font-size: 14px }
  .fs-16 { font-size: 16px }
  .fs-18 { font-size: 18px }
  .fs-20 { font-size: 20px }

  .no-underline { text-decoration: none }
  .text-silver { color: var(--text-silver) }
  .btn-text:hover { color: var(--text-white) }
  .bg-white-smoke { background-color: var(--text-white-smoke) }
`;

export default GlobalStyles;
