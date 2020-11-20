import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
  level: 1 | 2;
};

export const Text: React.FC<Props> = ({ className, children, level }) => (
  <Container className={className} level={level}>
    {children}
  </Container>
);

type TextProps = {
  level: 1 | 2;
};

const Container = styled.p<TextProps>``;
