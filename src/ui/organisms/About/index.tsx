import * as React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Button } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
// import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import facebookIcon from "~/static/facebook.svg";

const sliderSettings = {
  infinite: false,
  speed: 500,
  adaptiveWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const aboutData = [
  {
    text:
      "“Capital Bear offers an excellent interface, great support, and convenient withdrawals. It’s been a smooth experience from the very beginning.”",
    name: "Arishi Khitari",
    date: "July, 2020",
    socialIcon: facebookIcon,
  },
  {
    text:
      "“1Capital Bear offers an excellent interface, great support, and convenient withdrawals. It’s been a smooth experience from the very beginning.”",
    name: "Arishi Khitari",
    date: "July, 2021",
    socialIcon: facebookIcon,
  },
];

export const About = () => {
  return (
    <Wrap>
      <Section icon="chat" title="What our customers tell about us">
        <Quotes>
          <Slider {...sliderSettings}>
            {aboutData.map(({ text, name, date, socialIcon }, key) => (
              <Quote key={key}>
                <Text>{text}</Text>
                <Name>{name}</Name>
                <Date>{date}</Date>
                <Icon src={socialIcon} alt=" " />
              </Quote>
            ))}
          </Slider>
        </Quotes>
        <Cta href="/platform">Go to the platform</Cta>
      </Section>
    </Wrap>
  );
};

const Wrap = styled(Container)`
  padding-bottom: 50px;
  overflow: hidden;
`;

const Quotes = styled.div`
  margin-top: -20px;
  width: 100%;
  padding-bottom: 50px;
`;

const Quote = styled.div`
  position: relative;
  padding: 54px 25px;
  text-align: center;
  /* background-color: #f9f9fb; */
`;

const Cta = styled(Button)`
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
`;

const Name = styled.p`
  padding-top: 45px;
  font-size: 18px;
  line-height: 1;
  color: rgb(61, 61, 70);
  font-weight: 700;
`;

const Date = styled.p`
  color: rgb(119, 119, 119);
  font-size: 16px;
  padding-top: 5px;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  position: absolute;
  bottom: -12px;
  margin: auto;
  left: 0;
  right: 0;
  z-index: 2;
`;
