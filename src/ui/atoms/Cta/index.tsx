import * as React from "react";
import styled from "styled-components";
import { Button } from "~/ui/atoms";

type Props = {
  className?: string;
};

export const Cta: React.FC<Props> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export const Container = styled(Button)``;
