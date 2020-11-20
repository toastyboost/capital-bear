import * as React from "react";
import styled from "styled-components";

import { Logo, Button } from "~/ui/atoms";
import { Menu, LangSwitcher } from "~/ui/molecules";

const data = [
  {
    path: "",
    title: "Trade",
  },
  {
    path: "",
    title: "For Traders",
  },
  {
    path: "",
    title: "About us",
  },
  {
    path: "",
    title: "Regulation",
  },
];

export const Navigation = () => {
  return (
    <Container>
      <Logo />
      <Menu data={data} />
      <Settings>
        <LangSwitcher />
        <Login>Log In</Login>
        <SignUp>Sign Up</SignUp>
      </Settings>
    </Container>
  );
};

const Container = styled.section``;

const Settings = styled.div``;

const Login = styled(Button)``;

const SignUp = styled(Button)``;
