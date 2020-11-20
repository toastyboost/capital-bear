import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  level: 1 | 2;
};

const levels = {
  1: "h1",
  2: "h2",
} as const;

export const Title: React.FC<Props> = ({ className, children, level }) => (
  <Container className={className} as={levels[level]}>
    {children}
  </Container>
);

const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
  text-align: center;
`;
