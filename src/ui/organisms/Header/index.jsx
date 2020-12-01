import * as React from "react";
import styled from "styled-components";

import { Logo, Burger, Link, Langs } from "~/ui/atoms";
import { Menu, Sidebar } from "~/ui/molecules";

import { MEDIA } from "~/libs/media";
import { Container } from "~/ui/atoms";

export const data = [
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

export const Header = () => {
  const [isVisible, setVisiblility] = React.useState(false);

  return (
    <>
      <Wrap>
        <HeaderContainer>
          <HeaderLogo type="black" />
          <HeaderMenu data={data} />
          <Settings>
            <HeaderLangs />
            <Login href="/log-in">Log In</Login>
            <SignUp href="/sign-up">Sign Up</SignUp>
          </Settings>
          <MobileBurger
            isVisible={isVisible}
            onClick={() => setVisiblility(!isVisible)}
          />
        </HeaderContainer>
      </Wrap>
      <Sidebar isVisible={isVisible} toggler={setVisiblility} data={data} />
    </>
  );
};

const Wrap = styled.header`
  position: relative;
  z-index: 101;
  background-color: #fff;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const HeaderLogo = styled(Logo)`
  position: relative;

  img {
    max-width: 146px;
    height: auto;
  }

  ${MEDIA.PHONE`
    order: 1;
    left: -4px;
    bottom: -1px;
    width: auto;
  `}

  ${MEDIA.TABLET`
    order: 0;
    left: 0;
    bottom: 0;
    width: 120px;
  `};

  ${MEDIA.DESKTOP`
    width: 280px;
    bottom: 1px;
  `};
`;

const HeaderMenu = styled(Menu)`
  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.TABLET`
    display: block;
  `};
`;

const Settings = styled.div`
  display: flex;
  align-items: center;

  ${MEDIA.PHONE`
    order: 0;
  `}

  ${MEDIA.TABLET`
    order: 1;
  `};
`;

const HeaderLangs = styled(Langs)`
  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.TABLET`
    display: flex;
    margin-right: 24px;
  `};
`;

const Login = styled(Link)`
  font-size: 14px;
 
  white-space: nowrap;
`;

const SignUp = styled(Link)`
  color: var(--primary);
  white-space: nowrap;
  // hide signup on mobile

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
    border: 1px solid var(--primary);
    border-radius: 50px;
    padding: 5px 16px 7px 16px;
    margin-left: 20px;

    &:hover {
      background-color: var(--primary);
      color: #fff;
    }
  `};
`;

const MobileBurger = styled(Burger)`
  // show burger on mobile

  ${MEDIA.PHONE`
    display: flex;
    order: 2;
  `}

  ${MEDIA.TABLET`
    display: none;
  `};
`;
