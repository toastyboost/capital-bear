import * as React from "react";
import styled from "styled-components";

import { Logo, Burger, Link, Langs } from "~/ui/atoms";
import { Sidebar } from "~/ui/molecules";

import { MEDIA } from "~/libs/media";
import { Container } from "~/ui/atoms";

import { data } from "~/ui/organisms/Header";
import purpleArrow from "~/static/arrow-purple.svg";

export const InsideHeader: React.FC = () => {
  const [isVisible, setVisiblility] = React.useState<boolean>(false);

  return (
    <>
      <Wrap>
        <HeaderContainer>
          <HeaderLogo type="black" />
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
  .label {
    color: var(--text);

    &:after {
      background-image: url(${purpleArrow});
      transform: rotate(0);
      width: 13px;
      height: 8px;
      margin-left: 12px;
      bottom: 0;
    }
  }

  &:hover {
    .label {
      border-color: rgb(225, 222, 231);

      &:after {
        transform: rotate(180deg);
      }
    }
  }

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
  color: var(--primary);
`;

const SignUp = styled(Link)`
  // hide signup on mobile

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
    color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 50px;
    padding: 5px 16px 7px 16px;
    margin-left: 20px;

    &:hover {
      background-color: var(--primary);
      color: #fff;
      border: 1px solid var(--primary);
    }
  `};
`;

const MobileBurger = styled(Burger)`
  // show burger on mobile

  & > div > div {
    background-color: #000;
    &:before,
    &:after {
      background-color: #000;
      background-color: #000;
    }
  }

  ${MEDIA.PHONE`
    display: flex;
    order: 2;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;
