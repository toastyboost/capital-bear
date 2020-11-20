import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

export const Button: React.FC<Props> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export const Container = styled.div``;
