import * as React from "react";
import styled from "styled-components";

import { Title, Text, Icon, Button } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import bg320 from "~/static/header_bg_320.png";
import hero320 from "~/static/hero_320.png";

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
        <Text level={1}>
          Follow other investors, discover companies to believe in, invest with any.
        </Text>
        <Button>Open free account</Button>
        <HeroImage src={hero320} alt="" />
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
  position: relative;
  background-image: linear-gradient(180deg, #f1ecfb 0%, #f9f9fb 100%);

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  &:before {
    z-index: 1;
    background-image: url(${bg320});
  }
`;

const Wrap = styled(Container)`
  text-align: center;
  margin-top: -71px;
  padding-top: 71px;
  z-index: 100;
  position: relative;
`;

const HeroImage = styled.img`
  max-width: 265px;
  display: block;
  border-bottom: 1px solid #e2deeb;
`;

const Bullets = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Bullet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${MEDIA.PHONE`
    width: 50%;
    margin-bottom: 40px;
  `}

  ${MEDIA.DESKTOP`
    width: 24%;
  `};
`;

const BulletIcon = styled(Icon)`
  ${MEDIA.PHONE`
    width: 52px;
    height: 52px;
    padding: 15px;
    margin-bottom: 20px;
  `}

  ${MEDIA.DESKTOP`
    width: 71px;
    height: 71px;
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
