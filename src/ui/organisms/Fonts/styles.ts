import styled from "styled-components";

import { MEDIA } from "~/libs/media";
import { Wrap } from "~/styles";

export const TextContainer = styled.div`
  font-size: 1.6rem;
`;

export const Wrapper = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  width: 100%;
  margin-bottom: 16px;
`;

export const Block = styled.div`
  margin: 16px;
  border: 1px solid var(--border-color);
  padding: 32px;

  ${MEDIA.PHONE`
    width: calc(100% - 32px);
  `}

  ${MEDIA.DESKTOP`
    width: calc(50% - 32px);
  `};
`;

export const TextMerriweather = styled(Block)`
  font-family: var(--title-font);
`;

export const TextRoboto = styled(Block)`
  font-family: var(--main-font);
`;

export const Scrollable = styled.div`
  min-height: 2000px;
  width: calc(100% - 32px);
  border: 1px solid var(--border-color);
  margin: 16px;
`;
