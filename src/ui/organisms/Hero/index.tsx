import * as React from "react";
import styled from "styled-components";

import { Title, Text, Icon, Button } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import heroMobile from "~/static/hero-mobile.png";
import heroDesktop from "~/static/hero-desktop.png";

import headerBG320 from "~/static/header-bg-320.png";

const bulletData = [
  {
    icon: "user",
    numbers: "48,091,542",
    text: "registered users",
  },
  {
    icon: "download",
    numbers: "$20,375,097",
    text: "withdrawn by traders",
  },
  {
    icon: "check",
    numbers: "1,338,793",
    text: "trades per day",
  },
  {
    icon: "pin",
    numbers: "213",
    text: "supported countries",
  },
];

export const Hero = () => {
  return (
    <Background>
      <Wrap>
        <Title level={1}>Trade Stocks, Forex, Options and Cryptos</Title>
        <HeroText level={1}>
          Follow other investors, discover companies to believe in, invest with any.
        </HeroText>
        <Cta href="/to-open-free-account">Open free account</Cta>
        <HeroMobileImage src={heroMobile} alt="" />
        <HeroDesktopImage src={heroDesktop} alt="" />
        <Bullets>
          {bulletData.map(({ icon, numbers, text }) => (
            <Bullet key={icon}>
              <BulletIcon name={icon} />
              <BulletNumbers level={4}>{numbers}</BulletNumbers>
              <BulletText level={3}>{text}</BulletText>
            </Bullet>
          ))}
        </Bullets>
      </Wrap>
    </Background>
  );
};

const Background = styled.div`
  background-image: url(${headerBG320}), linear-gradient(180deg, #f1ecfb 0%, #f9f9fb 100%);
  background-position: top center;
  background-repeat: no-repeat;

  ${MEDIA.PHONE`
    background-size: contain;
  `}

  ${MEDIA.SMARTPHONE`
    background-size: cover;
  `}
`;

const Wrap = styled(Container)`
  text-align: center;
  margin-top: -70px;
  display: flex;
  flex-direction: column;

  ${MEDIA.PHONE`
    padding-top: calc(71px + 20px);
  `}

  ${MEDIA.SMARTPHONE`
    padding-top: calc(71px + 56px);
  `}
`;

const HeroText = styled(Text)`
  margin-top: 10px;
`;

const Cta = styled(Button)`
  margin: 24px auto 48px auto;
  line-height: 56px;
`;

const HeroMobileImage = styled.img`
  max-width: 265px;
  border-bottom: 1px solid #e2deeb;
  margin: 0 auto;

  ${MEDIA.PHONE`
    display: block;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

const HeroDesktopImage = styled.img`
  width: 100%;
  height: auto;

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.DESKTOP`
    display: block;
    margin-left: -44px;
  `};
`;

const Bullets = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${MEDIA.PHONE`
    padding-top: 60px;
    margin-bottom: 40px;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 35px;
    margin-top: -40px;
    margin-bottom: 70px;
  `};
`;

const Bullet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${MEDIA.PHONE`
    width: 50%;
     
  `}

  ${MEDIA.DESKTOP`
    width: 24%;
  `};
`;

const BulletIcon = styled(Icon)`
  margin-bottom: 20px;

  ${MEDIA.PHONE`
    width: 52px;
    height: 52px;

    img {
      width: 28px;
      height: 28px;
    }
  `}

  ${MEDIA.DESKTOP`
    width: 71px;
    height: 71px;

    img {
      width: 32px;
      height: 32px;
    }
  `};
`;

const BulletNumbers = styled(Title)`
  width: 100%;
  margin-bottom: 3px;
`;

const BulletText = styled(Text)`
  width: 100%;
  color: #49464f;
  max-width: 90px;
`;
