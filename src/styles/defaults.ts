import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { MEDIA } from "~/libs/media";

import sliderArrow from "~/static/slider-arrow.svg";
import { FontsStyles } from "./fonts";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${FontsStyles}
 
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

  .slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none} 

  .slick-arrow {
    font-size: 0;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    z-index: 100;
    background-image: url(${sliderArrow});
    background-size: cover;
    background-color: transparent;
    transition: 0.2s;
     
    cursor: pointer;
    
    &:hover {
      opacity: 0.5;
    }

    ${MEDIA.PHONE`
      width: 40px;
      height: 40px;
    `}

    ${MEDIA.DESKTOP`
      width: 60px;
      height: 60px;
    `};

    &.slick-disabled {
      opacity: 0;
    }
  }

  .slick-next {
    transform: translateY(0);

    ${MEDIA.PHONE`
      right: 32px;
    `}

    ${MEDIA.DESKTOP`
      right: -32px;
    `};
  }

  .slick-prev {
    transform: scaleX(-1) translateY(0);

    ${MEDIA.PHONE`
      left: -16px;
    `}

    ${MEDIA.DESKTOP`
      left: -32px;
    `};

  }


  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
