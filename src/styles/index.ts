import styled from "styled-components";

import { MEDIA } from "~/libs/media";

export { GlobalStyles } from "./defaults";

export const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;

  ${MEDIA.PHONE`
    padding: 0 8px;
  `}

  ${MEDIA.TABLET`
    padding: 0 12px;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 16px;
  `};
`;

export const Content = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
`;

export const Block = styled.div`
  display: flex;
`;

export const Title = styled.div`
  display: flex;
`;

export const Text = styled.div`
  display: flex;
`;

export const Button = styled.div`
  display: flex;
`;

export const FixedBackground = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  transition: all 0.15s ease-in-out;

  &[aria-hidden="false"] {
    opacity: 1;
    visibility: inherit;
  }

  &[aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
  }
`;
