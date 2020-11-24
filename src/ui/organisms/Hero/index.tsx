import * as React from "react";
import styled from "styled-components";

import { Title, Text, Icon, Button } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";
import { Container } from "~/ui/atoms";

import heroMobile from "~/static/hero-mobile.png";
import heroTablet from "~/static/hero-tablet.png";
import heroDesktop from "~/static/hero-desktop.png";

import blur320 from "~/static/blur-320.png";
import blur480 from "~/static/blur-480.png";
import blur960 from "~/static/blur-960.png";
import blur1280 from "~/static/blur-1280.png";

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
        <HeroTitle level={1}>
          Trade Stocks, Forex, Options and Cryptos
        </HeroTitle>
        <HeroText level={1}>
          Follow other investors, discover companies to believe in, invest
          with&nbsp;any.
        </HeroText>
        <Cta href="/to-open-free-account">Open free account</Cta>
        <HeroMobileImage src={heroMobile} alt="" />
        <HeroTabletImage src={heroTablet} alt="" />
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
  background-position: top center;
  background-repeat: no-repeat;

  @media (min-width: 20em) {
    background-size: contain;
    background-image: url(${blur320}),
      linear-gradient(180deg, #f1ecfb 0%, #f9f9fb 100%);
  }

  @media (min-width: 26em) {
    background-size: initial;
    background-image: url(${blur480}),
      linear-gradient(180deg, #f1ecfb 0%, #f9f9fb 100%);
  }

  @media (min-width: 48em) {
    background-size: contain;
    background-image: url(${blur960}),
      linear-gradient(180deg, #f1ecfb 0%, #f9f9fb 100%);
  }

  @media (min-width: 64em) {
    background-image: url(${blur1280}),
      linear-gradient(180deg, #f1ecfb 0%, #f9f9fb 100%);
  }
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

const HeroTitle = styled(Title)`
  ${MEDIA.TABLET`
    max-width: 520px;
    margin: 0 auto;
  `}

  ${MEDIA.DESKTOP`
    max-width: 100%;
  `}
`;

const HeroText = styled(Text)`
  margin-top: 16px;

  &[data-level="1"] {
    ${MEDIA.PHONE`
      font-size: 17px;
    `}

    ${MEDIA.TABLET`
      font-size: 18px;
      max-width: 420px;
      margin-left: auto;
      margin-right: auto;
    `}

    ${MEDIA.DESKTOP`
      max-width: 100%;
    `}
  }
`;

const Cta = styled(Button)`
  margin: 36px auto 48px auto;
  line-height: 56px;
`;

const HeroMobileImage = styled.img`
  border-bottom: 1px solid #e2deeb;
  margin: 0 auto;

  ${MEDIA.PHONE`
    display: block;
    max-width: 265px;
  `}

  ${MEDIA.SMARTPHONE`
    display: block;
    max-width: 365px;
  `}

  ${MEDIA.TABLET`
    display: none;
  `};
`;

const HeroTabletImage = styled.img`
  border-bottom: 1px solid #e2deeb;
  margin: 0 auto;
  width: 100%;
  max-width: 590px;

  ${MEDIA.PHONE`
    display: none;
  `}

  ${MEDIA.TABLET`
    display: block;
  `};

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
    padding-bottom: 25px;
  `}

  ${MEDIA.TABLET`
    width: 25%;
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

  ${MEDIA.SMARTPHONE`
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
