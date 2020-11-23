import * as React from "react";
import styled from "styled-components";

import { SystemLayout } from "~/ui/templates";
import { Title, Text } from "~/ui/atoms";

const LogIn: React.FC = () => {
  return (
    <SystemLayout>
      <LoginTitle level={3}>Sign up</LoginTitle>
      <LoginDescription level={2}>Let’s create your account</LoginDescription>
    </SystemLayout>
  );
};

export default LogIn;

const LoginTitle = styled(Title)`
  width: 100%;
`;

const LoginDescription = styled(Text)`
  margin-top: 10px;
`;
