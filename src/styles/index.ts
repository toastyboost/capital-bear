import styled from "styled-components";

import { MEDIA } from "~/libs/media";

export { GlobalStyles } from "./defaults";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  
  ${MEDIA.PHONE`
    max-width: 320px;
 
  `}

  ${MEDIA.TABLET`
    max-width: 960px;
  `}

  ${MEDIA.DESKTOP`
    max-width: 1280px;
  `};
`;
