import * as React from "react";
import styled from "styled-components";

import { Title, Text } from "~/ui/atoms";
import smallLogo from "~/static/logo-small.svg";

export const PassReset = () => {
  return (
    <Wrap>
      <Logo src={smallLogo} />
      <SectionTitle level={2}>
        Password reset <br />
        link sent
      </SectionTitle>
      <SectionText level={2}>
        We have sent you an email to reset your password.
        <br />
        Just click the link and follow the instructions.
      </SectionText>
      <Tip>Don't forget to check your spam box.</Tip>
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
  width: 36px;
  height: 36px;
  display: block;
  margin-bottom: 40px;
`;

const SectionTitle = styled(Title)`
  margin-bottom: 20px;
  max-width: 350px;
`;

const SectionText = styled(Text)`
  margin-bottom: 20px;
  max-width: 450px;
`;

const Tip = styled.p`
  font-size: 14px;
  margin-bottom: -20px;
  position: relative;
  bottom: -80px;
  display: block;
  color: #49464f;
  opacity: 0.6;
`;
