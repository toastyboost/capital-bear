import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { FontsStyles } from "./fonts";
import { SlickStyles } from './slick';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${FontsStyles}
  ${SlickStyles}
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --main-font: "Gilroy";
    --text-font: "Manrope";
    --primary: rgb(105, 57, 207);
    --warning: rgb(251, 86, 81);
    --text: rgb(37, 45, 61);
    --border: rgba(0, 0, 0, 0.05);
    --block-bg: rgb(39, 38, 45);
  }

  body,
  html {
    font-family: var(--main-font);
    color: var(--text-color);
    background-color: var(--bg-color);
    font-size: 62.5%;
    line-height: 1.4;
    font-weight: 400;
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  section {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--main-font);
    color: var(--text-color);
    margin: 0;
  }

  p {
    font-family: var(--text-font);
  }

  button {
    border: 0;
  }

  input {
    border: 0;
  }

  a {
    border: 0;
    transition: 0.2s;
    text-decoration: none;
    color: var(--black);
  }

  a:visited,
  a:focus,
  a:active,
  a:hover {
    outline: 0 none;
  }

  img {
    border: 0;
  }

  menu,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  section,
  header,
  footer {
    font-size: 16px;
  }
`;
