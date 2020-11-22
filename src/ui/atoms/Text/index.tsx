import * as React from "react";
import styled from "styled-components";
import { MEDIA } from "~/libs/media";

type Levels = {
  level: 1 | 2 | 3;
};

type Props = {
  className?: string;
} & Levels;

export const Text: React.FC<Props> = ({ className, children, level }) => (
  <Wrap className={className} as={"p" as any} level={level}>
    {children}
  </Wrap>
);

const map = (props: Levels) => ({
  "data-level": props.level,
});

const Wrap = styled.p.attrs<Levels>(map)`
  color: #425466;
  font-weight: 500;

  &[data-level="1"] {
    ${MEDIA.PHONE`    
      font-size: 16px;
      line-height: 22px;
    `}

    ${MEDIA.DESKTOP`
      font-size: 18px;
      line-height: 26px;
    `};
  }

  &[data-level="2"] {
    ${MEDIA.PHONE`    
      font-size: 16px;
      line-height: 24px;
    `}

    ${MEDIA.DESKTOP`
      font-size: 16px;
      line-height: 24px;
    `};
  }

  &[data-level="3"] {
    ${MEDIA.PHONE`
      font-size: 14px;
      line-height: 19px;
    `}

    ${MEDIA.DESKTOP`
      font-size: 16px;
      line-height: 22px;
    `};
  }
`;
