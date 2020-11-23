import * as React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Button } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import facebookIcon from "~/static/facebook.svg";

const sliderSettings = {
  infinite: false,

  slidesToShow: 1,
  slidesToScroll: 1,
};

const aboutData = [
  {
    text:
      "Capital Bear offers an excellent interface, great support, and convenient withdrawals. It’s been a smooth experience from the very beginning",
    name: "Arishi Khitari",
    date: "July, 2020",
    socialIcon: facebookIcon,
  },
  {
    text:
      "Capital Bear made it easy to jump in and begin trading. It’s super intuitive, and the video tutorials were especially helpful!",
    name: "Richard Jordan",
    date: "January, 2021",
  },
  {
    text:
      "Fell in love with the platform the moment I saw it. Its clean and simple design was what sealed the deal for me",
    name: "Jenn Schaefer",
    date: "une, 2020",
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
                <Text>«{text}»</Text>
                <Info>
                  <Name>{name}</Name>
                  <span>‧</span>
                  <Date>{date}</Date>
                  {socialIcon && <Icon src={socialIcon} alt=" " />}
                </Info>
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
  overflow: hidden;

  ${MEDIA.PHONE`
    padding: 0 0 50px 0;
  `}

  ${MEDIA.DESKTOP`
    padding: 0 24px 80px 24px;
  `};

  .slick-slider {
    width: 100%;

    ${MEDIA.PHONE`
      transform: translateX(24px);
    `}

    ${MEDIA.DESKTOP`
      transform: translateX(0);
    `};
  }

  .slick-arrow.slick-disabled {
    opacity: 1;
  }
`;

const Quotes = styled.div`
  margin-top: -20px;
  padding-bottom: 50px;
  width: 100%;
`;

const Quote = styled.div`
  position: relative;
  text-align: center;
  background-color: #f9f9fb;

  ${MEDIA.PHONE`
    width: 270px !important;
    padding: 54px 25px 25px 25px;

    span {
      display: none;
    }
  `}

  ${MEDIA.DESKTOP`
    width: 100% !important;
    padding: 54px 110px 65px 110px;

    span {
      display: inline-block;
      padding: 0 7px;
      opacity: 0.5;
    }
  `};
`;

const Cta = styled(Button)`
  margin: 0 auto;
`;

const Text = styled.p`
  ${MEDIA.PHONE`
    font-size: 18px;
    line-height: 27px;
  `}

  ${MEDIA.DESKTOP`
    font-size: 30px;
    line-height: 44px;
  `};
`;

const Info = styled.div`
  font-size: 18px;
  line-height: 1;

  ${MEDIA.DESKTOP`
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;

const Name = styled.p`
  color: rgb(61, 61, 70);
  font-weight: 700;

  ${MEDIA.PHONE`
    padding-top: 45px;
  `}

  ${MEDIA.DESKTOP`
    padding-top: 0;
  `};
`;

const Date = styled.p`
  color: rgb(119, 119, 119);
  font-size: 16px;

  ${MEDIA.PHONE`
    padding-top: 5px;
  `}

  ${MEDIA.DESKTOP`
    padding-top: 0;
    margin: 0 20px 0 0;
  `};
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;

  ${MEDIA.PHONE`
    margin: 12px 0 auto 0;
  `}

  ${MEDIA.DESKTOP`
    margin: 0;
  `};
`;
