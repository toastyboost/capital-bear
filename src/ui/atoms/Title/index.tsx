import * as React from "react";
import styled from "styled-components";
import { MEDIA } from "~/libs/media";

type Levels = {
  level: 1 | 2 | 3 | 4;
};

type Props = {
  className?: string;
} & Levels;

const levels = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as any;

export const Title: React.FC<Props> = ({ className, children, level }) => (
  <Wrap className={className} as={levels[level]} level={level}>
    {children}
  </Wrap>
);

const map = (props: Levels) => ({
  "data-level": props.level,
});

const Wrap = styled.div.attrs<Levels>(map)`
  color: #27262d;

  /* h1 */
  &[data-level="1"] {
    font-weight: 600;

    ${MEDIA.PHONE`
      font-size: 30px;
      line-height: 38px;
    `}

    ${MEDIA.DESKTOP`
      font-size: 40px;
      line-height: 40px;
    `};
  }

  /* h2 */
  &[data-level="2"] {
    font-weight: 600;

    ${MEDIA.PHONE`
      font-size: 30px;
      line-height: 36px;
    `}

    ${MEDIA.DESKTOP`
      font-size: 39px;
      line-height: 42px; 
    `};
  }

  /* h3 */
  &[data-level="3"] {
    font-weight: 600;

    ${MEDIA.PHONE`
      font-size: 24px;
      line-height: 30px;
    `}

    ${MEDIA.DESKTOP`
      font-size: 30px;
      line-height: 40px; 
    `};
  }

  /* h4 */
  &[data-level="4"] {
    font-weight: 700;

    ${MEDIA.PHONE`
      font-size: 20px;
      line-height: 30px;
    `}

    ${MEDIA.DESKTOP`
      font-size: 24px;
      line-height: 30px; 
    `};
  }
`;
