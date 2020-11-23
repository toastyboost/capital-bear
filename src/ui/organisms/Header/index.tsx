import * as React from "react";
import styled from "styled-components";

import { Logo, Burger, Link, Langs } from "~/ui/atoms";
import { Menu } from "~/ui/molecules";

import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

const data = [
  {
    path: "/trade",
    title: "Trade",
  },
  {
    path: "/for-traders",
    title: "For traders",
  },
  {
    path: "/about-us",
    title: "About us",
  },
  {
    path: "/regulation",
    title: "Regulation",
  },
];

const insidePages = ["/log-in", "/sign-up", ...data.map(({ path }) => path)];

const isMainPage =
  typeof window !== "undefined" &&
  !insidePages.includes(window.location.pathname);

export const Header: React.FC = () => {
  return (
    <Wrap>
      <HeaderContainer>
        <HeaderLogo type={isMainPage ? "white" : "black"} />
        <HeaderMenu data={data} />
        <Settings>
          <HeaderLangs />
          <Login href="/log-in">Log In</Login>
          <SignUp href="/sign-up">Sign Up</SignUp>
        </Settings>
        <MobileBurger isVisible={false} onClick={() => null} />
      </HeaderContainer>
    </Wrap>
  );
};

const Wrap = styled.header`
  position: relative;
  z-index: 101;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 71px;
`;

const HeaderLogo = styled(Logo)`
  position: relative;

  img {
    max-width: 120px;
    height: auto;
  }

  ${MEDIA.PHONE`
    order: 1;
    left: -4px;
    bottom: -1px;
    width: auto;
  `}

  ${MEDIA.DESKTOP`
    order: 0;
    left: 0;
    bottom: 0;
    width: 280px;
  `};
`;

const HeaderMenu = styled(Menu)`
  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
  `};
`;

const Settings = styled.div`
  display: flex;
  align-items: center;

  ${MEDIA.PHONE`
    order: 0;
  `}

  ${MEDIA.DESKTOP`
    order: 1;
  `};
`;

const HeaderLangs = styled(Langs)`
  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: flex;
    margin-right: 24px;
  `};
`;

const Login = styled(Link)`
  font-size: 14px;
  color: #d8d8d8;
`;

const SignUp = styled(Link)`
  color: #fff;

  // hide signup on mobile

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    padding: 5px 16px 7px 16px;
    margin-left: 20px;

    &:hover {
      background-color: var(--primary);
      border: 1px solid var(--primary);
    }
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
