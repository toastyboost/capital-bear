import * as React from "react";
import styled from "styled-components";

import { Title, Text, Link } from "~/ui/atoms";
import stop from "~/static/stop.svg";

export const ServiceAnavilable = () => {
  return (
    <Wrap>
      <Logo src={stop} />
      <SectionTitle level={3}>
        Dear user,
        <br />
        Capital Bear is currently unavailable in your country.
      </SectionTitle>
      <SectionText level={2}>
        If you think you’re seeing this message by mistake, please contact{" "}
        <SectionLink href="mailto:support@capitalbear.com">
          support@capitalbear.com
        </SectionLink>
      </SectionText>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: var(--block-bg);
  padding: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  display: block;
`;

const SectionTitle = styled(Title)`
  margin-bottom: 20px;
  max-width: 400px;
`;

const SectionText = styled(Text)`
  margin-bottom: 20px;
  max-width: 450px;
`;

const SectionLink = styled(Link)`
  color: var(--primary);
  font-size: 16px;
`;
