import { css } from "styled-components";

import {
  GilroyRegularEOT,
  GilroyRegularTTF,
  GilroyRegularWOFF,
} from "~/static/fonts/Gilroy/regular";

export const FontsStyles = css`

  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Merriweather:400,700,900&display=swap");

  @font-face {
    font-family: "Gilroy";
    src: url(${GilroyRegularEOT});
    src: local("Gilroy Regular"), local("Gilroy-Regular"),
      url("${GilroyRegularEOT}?#iefix") format("embedded-opentype"),
      url("${GilroyRegularWOFF}") format("woff"),
      url("${GilroyRegularTTF}") format("truetype");
    font-weight: normal;
    font-style: normal;
  }


`;
