import * as React from "react";
import styled from "styled-components";
import { GenericLayout } from "~/ui/templates";
import { Welcome } from "~/ui/molecules";
import { Container } from "~/styles";
import { GDPR } from "~/ui/atoms";

export const SystemLayout: React.FC = ({ children }) => (
  <GenericLayout isInside>
    <Section>
      <Left>
        <Welcome />
      </Left>
      <Right>{children}</Right>
    </Section>
    <GDPR />
  </GenericLayout>
);

const Section = styled(Container)`
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  padding: 0 50px 0 25px;
  display: flex;
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px 0 25px;
  width: 50%;
`;
