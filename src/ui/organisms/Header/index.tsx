import * as React from "react";
import styled from "styled-components";

import { Logo, Button, Burger, Link } from "~/ui/atoms";
import { Menu, Langs } from "~/ui/molecules";

import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

const data = [
  {
    path: "/1",
    title: "Trade",
  },
  {
    path: "/2",
    title: "For traders",
  },
  {
    path: "/3",
    title: "About us",
  },
  {
    path: "/4",
    title: "Regulation",
  },
];

export const Header = () => {
  return (
    <Container>
      <Wrap>
        <HeaderLogo />
        <HeaderMenu data={data} />
        <Settings>
          <HeaderLangs />
          <Login>Log In</Login>
          <SignUp>Sign Up</SignUp>
        </Settings>
        <MobileBurger isVisible={false} onClick={() => null} />
      </Wrap>
    </Container>
  );
};

const Wrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 71px;
  position: relative;
  z-index: 100;
`;

const HeaderLogo = styled(Logo)`
  ${MEDIA.PHONE`
    order: 1;
  `}

  ${MEDIA.DESKTOP`
    order: 0;
  `};
`;

const HeaderMenu = styled(Menu)`
  // hide menu on mobile

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
  `};
`;

const Settings = styled.div`
  display: flex;

  ${MEDIA.PHONE`
    order: 0;
  `}

  ${MEDIA.DESKTOP`
    order: 1;
  `};
`;

const HeaderLangs = styled(Langs)`
  // hide langs on mobile
  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
  `};
`;

const Login = styled(Link)`
  font-size: 14px;
  color: #fff;
`;

const SignUp = styled(Button)`
  // hide signup on mobile

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
  `};
`;

const MobileBurger = styled(Burger)`
  // show burger on mobile

  ${MEDIA.PHONE`
    display: flex;
    order: 2;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;
