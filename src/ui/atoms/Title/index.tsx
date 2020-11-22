import * as React from "react";
import styled from "styled-components";
import { MEDIA } from "~/libs/media";

type Levels = {
  level: 1 | 2 | 3 | 4;
};

type Props = {
  className?: string;
  dangerouslySetInnerHTML?: any;
} & Levels;

const levels = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as any;

export const Title: React.FC<Props> = ({ className, children, level, dangerouslySetInnerHTML }) => (
  <Wrap
    className={`${className} title`}
    as={levels[level]}
    level={level}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
  >
    {children}
  </Wrap>
);

const map = (props: Levels) => ({
  "data-level": props.level,
});

const Wrap = styled.div.attrs<Levels>(map)`
  color: #27262d;
  font-weight: 600;

  /* h1 */
  &[data-level="1"] {
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
