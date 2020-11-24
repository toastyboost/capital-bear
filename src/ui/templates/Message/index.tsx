import * as React from "react";
import styled from "styled-components";
import { GenericLayout } from "~/ui/templates";
import { Container } from "~/ui/atoms";

export const MessageLayout: React.FC = ({ children }) => (
  <GenericLayout isInside>
    <Section>{children}</Section>
  </GenericLayout>
);

const Section = styled(Container)`
  padding: 50px 0 110px 0;
  display: flex;
  justify-content: center;
`;
