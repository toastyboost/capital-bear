import { css } from "styled-components";

import {
  GilroyBoldOTF, GilroyMediumOTF, GilroyRegularOTF, GilroySemiBoldOTF,
} from "~/static/fonts/Gilroy";

import {
  ManropeRegularTTF,
  ManropeBoldTTF,
  ManropeSemiBold,
  ManropeMedium
} from "~/static/fonts/Manrope";

export const FontsStyles = css`

  @font-face {
    font-family: "Gilroy";
    src: url("${GilroyRegularOTF}");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${GilroyMediumOTF}");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${GilroySemiBoldOTF}");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Gilroy";
    src: url("${GilroyBoldOTF}");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  // Manrope

  @font-face {
    font-family: "Manrope";
    src: url("${ManropeRegularTTF}");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  } 
  
  @font-face {
    font-family: "Manrope";
    src: url("${ManropeMedium}");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Manrope";
    src: url("${ManropeSemiBold}");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Manrope";
    src: url("${ManropeBoldTTF}");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
