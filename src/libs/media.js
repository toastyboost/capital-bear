import { css } from "styled-components";

import { BREAKPOINTS } from "~/libs/constants";
 
const defaults = {
  DESKTOP: () => css``,
  TABLET: () => css``,
  SMARTPHONE: () => css``,
  PHONE: () => css``,
};

export const MEDIA = (Object.keys(BREAKPOINTS)).reduce(
  (accumulator, label) => {
    const relativeEmToPxRatio = 16;
    accumulator[label] = (properties) => css`
      @media (min-width: ${BREAKPOINTS[label] / relativeEmToPxRatio}em) {
        ${css(properties)};
      }
    `;
    return accumulator;
  },
  defaults
);
