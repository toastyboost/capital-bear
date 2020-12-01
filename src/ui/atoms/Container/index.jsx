import styled from "styled-components";

import { MEDIA } from "~/libs/media";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${MEDIA.PHONE`
    max-width: 320px;
    padding: 0 24px;
  `}

  ${MEDIA.SMARTPHONE`
    max-width: 425px;
    padding: 0 30px;
  `}

  ${MEDIA.TABLET`
    max-width: 1024px;
  `}

  ${MEDIA.DESKTOP`
    max-width: 1280px;
  `};
`;
