import * as React from "react";
import styled from "styled-components";
import { GenericLayout } from "~/ui/templates";
import { Welcome } from "~/ui/molecules";
import { Container } from "~/styles";

export const SystemLayout: React.FC = ({ children }) => (
  <GenericLayout>
    <Section>
      <Left>
        <Welcome />
      </Left>
      <Right>{children}</Right>
    </Section>
  </GenericLayout>
);

const Section = styled(Container)`
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  padding: 0 25px;
  display: flex;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  padding: 0 25px;
  width: 50%;
`;
