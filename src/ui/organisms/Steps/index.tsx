import * as React from "react";
import styled from "styled-components";

import { Title, Text, Button } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import step1 from "~/static/step-1.png";
import step2 from "~/static/step-2.png";
import step3 from "~/static/step-3.png";
import step4 from "~/static/step-4.png";

const stepsData = [
  {
    title: "Register for free. <br />It takes less than 1 minute",
    text:
      "After a simple registration, you will get access to thousands of assets",
    imageSrc: step1,
  },
  {
    title: "Make deposit from $10 via a preferable method",
    text:
      "Top up your account without commission via over 20 local and international payment options",
    imageSrc: step2,
  },
  {
    title: "Start trading. <br />Choose the amount and hit Buy or Sell",
    text:
      "Use technical indicators to make informed decisions and apply Stop Loss to safeguard your investments.",
    imageSrc: step3,
  },
  {
    title: "Withdraw profit quickly and securely",
    text:
      "Receive money to the payment method of choice in no time. Personal data protection guaranteed.",
    imageSrc: step4,
  },
];

export const Steps = () => {
  return (
    <Wrap>
      <StepsSection
        icon="ways"
        title="4 steps to get first revenue"
        description="Get started in a few clicks and enter the market the same day"
      >
        {stepsData.map(({ title, text, imageSrc }, key) => (
          <Step key={key}>
            <Left>
              <Tag level={3}>Step {key + 1}</Tag>
              <StepTitle
                level={3}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <StepText level={3}>{text}</StepText>
            </Left>
            <Right>
              <Image src={imageSrc} />
            </Right>
          </Step>
        ))}
      </StepsSection>
      <Footer>
        <Cta href="/to-platform">Go to the platform</Cta>
      </Footer>
    </Wrap>
  );
};

const Wrap = styled(Container)`
  ${MEDIA.PHONE`
    padding-bottom: 51px;
  `}

  ${MEDIA.DESKTOP`
    padding-bottom: 81px;
  `};
`;

const Left = styled.div`
  ${MEDIA.PHONE`
    text-align: center;
  `}

  ${MEDIA.DESKTOP`
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 420px;
  `};
`;

const Right = styled.div``;

const Step = styled.div`
  ${MEDIA.PHONE`
    padding-bottom: 50px;
  `}

  ${MEDIA.DESKTOP`
    display: flex;
    margin: 0 auto;
    padding-bottom: 80px;
  `};
`;

const StepTitle = styled(Title)`
  padding-bottom: 15px;

  ${MEDIA.DESKTOP`
    max-width: 330px;
  `}
`;

const StepsSection = styled(Section)`
  ${Step} {
    &:nth-child(odd) {
      ${MEDIA.DESKTOP`
        flex-direction: row-reverse;
      `}

      ${Left} {
        ${MEDIA.DESKTOP`
          margin-left: 120px;
        `}
      }
    }

    &:nth-child(even) {
      ${Left} {
        ${MEDIA.DESKTOP`
          max-width: 360px;
          margin-right: 180px;
        `}
      }
    }
  }
`;

const Tag = styled(Text)`
  border: 2px solid #ff754c;
  border-radius: 9px;
  padding: 2px 10px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 20px;

  ${MEDIA.DESKTOP`
    align-self: flex-start;
  `};
`;

const StepText = styled(Text)`
  padding-bottom: 35px;
  color: #27262d;

  ${MEDIA.DESKTOP`
    max-width: 360px;
  `};
`;

const Image = styled.img`
  ${MEDIA.PHONE`
    width: 100%;
    height: 100%;
  `}

  ${MEDIA.DESKTOP`
    width: 420px;
    height: 420px;
  `};
`;

const Footer = styled.div`
  text-align: center;
`;

const Cta = styled(Button)`
  margin: 0 auto;
`;
