import * as React from "react";
import styled from "styled-components";

import { Title, Text, Button } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import step1 from "~/static/step-1.svg";
import step2 from "~/static/step-2.svg";
import step3 from "~/static/step-3.svg";
import step4 from "~/static/step-4.svg";

const stepsData = [
  {
    title: "Register for free. It takes less than 1 minute",
    text: "After a simple registration, you will get access to thousands of assets",
    imageSrc: step1,
  },
  {
    title: "Make deposit from $10 via a preferable method",
    text:
      "Top up your account without commission via over 20 local and international payment options",
    imageSrc: step2,
  },
  {
    title: "Start trading. Choose the amount and hit Buy or Sell",
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
      <Section
        icon="ways"
        title="4 steps to get first revenue"
        description="Get started in a few clicks and enter the market the same day"
      >
        {stepsData.map(({ title, text, imageSrc }, key) => (
          <Step key={key}>
            <Left>
              <Tag level={3}>Step {key + 1}</Tag>
              <StepTitle level={3}>{title}</StepTitle>
              <StepText level={3}>{text}</StepText>
            </Left>
            <Right>
              <Image src={imageSrc} />
            </Right>
          </Step>
        ))}
        <Cta>Go to the platform</Cta>
      </Section>
    </Wrap>
  );
};

const Wrap = styled(Container)`
  padding-bottom: 51px;
`;

const Step = styled.div`
  padding-bottom: 50px;
`;

const Tag = styled(Text)`
  border: 2px solid #ff754c;
  border-radius: 9px;
  padding: 2px 10px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Left = styled.div`
  text-align: center;
`;

const Right = styled.div``;

const StepTitle = styled(Title)`
  padding-bottom: 15px;
`;

const StepText = styled(Text)`
  padding-bottom: 35px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Cta = styled(Button)`
  margin: 0 auto;
`;
