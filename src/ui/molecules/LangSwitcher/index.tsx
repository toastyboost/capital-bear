import * as React from "react";
import styled from "styled-components";

type MenuProps = {
  className?: string;
};

export const LangSwitcher: React.FC<MenuProps> = ({ className }) => {
  return <Container>langs</Container>;
};

export const Container = styled.div`
  display: flex;
`;
