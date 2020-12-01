import * as React from "react";
import styled from "styled-components";
import { MEDIA } from "~/libs/media";
 
export const Text = ({ className, children, level }) => (
  <Wrap className={className} as="p" level={level}>
    {children}
  </Wrap>
);

const map = (props) => ({
  "data-level": props.level,
});

const Wrap = styled.p.attrs(map)`
  color: #425466;
  font-weight: 500;

  &[data-level="1"] {
    ${MEDIA.PHONE`    
      font-size: 16px;
      line-height: 22px;
    `}

    ${MEDIA.SMARTPHONE`
      font-size: 18px;
      line-height: 26px;
    `};
  }

  &[data-level="2"] {
    ${MEDIA.PHONE`    
      font-size: 16px;
      line-height: 24px;
    `}

    ${MEDIA.SMARTPHONE`
      font-size: 16px;
      line-height: 24px;
    `};
  }

  &[data-level="3"] {
    ${MEDIA.PHONE`
      font-size: 14px;
      line-height: 19px;
    `}

    ${MEDIA.SMARTPHONE`
      font-size: 16px;
      line-height: 23px;
    `};
  }
`;
