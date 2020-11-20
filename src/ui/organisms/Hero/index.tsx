import * as React from "react";
import styled from "styled-components";

import { Title, Text, Icon } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";

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
    <Container>
      <Title level={1}>Trade Stocks, Forex, Options and Cryptos</Title>
      <Text level={1}>
        Follow other investors, discover companies to believe in, invest with any.
      </Text>
      {/* image */}
      <Bullets>
        {bulletData.map(({ icon, numbers, text }) => (
          <Bullet>
            <BulletIcon name={icon} />
            <BulletNumbers>{numbers}</BulletNumbers>
            <BulletText level={2}>{text}</BulletText>
          </Bullet>
        ))}
      </Bullets>
    </Container>
  );
};

const Container = styled.div`
  ${MEDIA.PHONE`
    display: block;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

const Bullets = styled.div``;
const Bullet = styled.div``;

const BulletIcon = styled(Icon)`
  width: 71px;
  height: 71px;
`;

const BulletNumbers = styled.div``;
const BulletText = styled(Text)``;
