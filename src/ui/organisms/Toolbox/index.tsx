import * as React from "react";
import styled from "styled-components";

import { Title, Text, Button } from "~/ui/atoms";
import { Section } from "~/ui/molecules";
import { MEDIA } from "~/libs/media";
import { Container } from "~/styles";

import toolbox1 from "~/static/toolbox-1.svg";
import toolbox2 from "~/static/toolbox-2.svg";
import toolbox3 from "~/static/toolbox-3.svg";
import toolbox4 from "~/static/toolbox-4.svg";

const toolboxData = [
  {
    title: "Practice account",
    text: "Get notifications on important events and never miss on juicy trading opportunities",
    imageSrc: toolbox1,
    href: "/url",
  },
  {
    title: "Market news",
    text: "Provide you with the best daily handcrafted news",
    imageSrc: toolbox2,
    href: "/url",
  },
  {
    title: "Analytical tools",
    text: "Get the most out of fundamental and technical analysis",
    imageSrc: toolbox3,
    href: "/url",
  },
  {
    title: "Practice account",
    text: "Refillable free practice account of $10,000",
    imageSrc: toolbox4,
    href: "/url",
  },
];

export const Toolbox = () => {
  return (
    <Wrap>
      <Container>
        <Section
          icon="cube"
          title="Advanced trading toolbox"
          description="Customize your trading with special features and make informed decisions on each deal."
        >
          {toolboxData.map(({ title, text, imageSrc, href }, key) => (
            <Tool key={key}>
              <Image src={imageSrc} />
              <Content>
                <ToolTitle level={4}>{title}</ToolTitle>
                <Right>
                  <ToolText level={2}>{text}</ToolText>
                  <ToolCta href={href} type="ghost">
                    Open free account
                  </ToolCta>
                </Right>
              </Content>
            </Tool>
          ))}
        </Section>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #f9f9fb;
`;

const Tool = styled.div`
  display: flex;
  flex-direction: column;

  ${MEDIA.PHONE`
    width: 100%;
  `}

  ${MEDIA.DESKTOP`
    width: 50%;
    margin: 0 30px;
    max-width: 542px;
  `};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const Content = styled.div`
  padding-bottom: 82px;
  width: 100%;
  text-align: left;

  ${MEDIA.PHONE`
    padding-top: 20px;
  `}

  ${MEDIA.DESKTOP`
    padding-top: 30px;
    display: flex;
  `};
`;

const ToolTitle = styled(Title)`
  ${MEDIA.DESKTOP`
    width: 50%;
  `};
`;

const Right = styled.div`
  ${MEDIA.DESKTOP`
    width: 50%;
  `};
`;

const ToolText = styled(Text)`
  color: #27262d;

  ${MEDIA.PHONE`
    padding-top: 10px;
  `}

  ${MEDIA.DESKTOP`
    padding-top: 0;
  `};
`;

const ToolCta = styled(Button)`
  ${MEDIA.PHONE`
    display: none;
  `};

  ${MEDIA.DESKTOP`
    margin-top: auto;
    display: inline-block;
  `};
`;
