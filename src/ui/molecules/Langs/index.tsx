import * as React from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};

export const Langs: React.FC<Props> = ({ className }) => {
  return <Container className={className}>langs</Container>;
};

const Container = styled.div`
  display: flex;
`;
