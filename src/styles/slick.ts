import { css } from "styled-components";

export const SlickStyles = css`
  .slick-slider {
    position: relative;
    display: block;
    width: 100%;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    width: 100%;
    position: relative;
    padding: 0 !important;
    display: block;
    outline: none;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-arrow {
    display: none;
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
  }

  .slick-track:before,
  .slick-track:after {
    content: "";
    display: table;
    clear: both;
  }

  .slick-slide {
    display: flex;
    height: auto;
    min-height: 1px;
    float: left;
  }

  .slick-slide > div {
    width: 100%;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  /* dots */

  .slick-dots {
    display: flex !important;
    justify-content: center;
    list-style: none;
    width: 100%;
  }

  .slick-dots button {
    background-color: var(--border-color);
    margin: 0 8px;
    width: 16px;
    height: 16px;
    font-size: 0;
    border-radius: 50%;
    cursor: pointer;
  }

  .slick-dots .slick-active {
    width: 20;
    height: 20px;
  }

  .slick-dots .slick-active button {
    background-color: transparent;
  }

  .slick-arrow {
    position: absolute;
  }

  .slick-arrow.slick-disabled,
  .slick-arrow:active {
    opacity: 0.25;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }
`;
