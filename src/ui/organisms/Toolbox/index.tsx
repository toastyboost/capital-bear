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
  },
  {
    title: "Market news",
    text: "Provide you with the best daily handcrafted news",
    imageSrc: toolbox2,
  },
  {
    title: "Analytical tools",
    text: "Get the most out of fundamental and technical analysis",
    imageSrc: toolbox3,
  },
  {
    title: "Practice account",
    text: "Refillable free practice account of $10,000",
    imageSrc: toolbox4,
  },
];

export const Toolbox = () => {
  return (
    <Wrap>
      <Section
        icon="cube"
        title="Advanced trading toolbox"
        description="Customize your trading with special features and make informed decisions on each deal."
      >
        {toolboxData.map(({ title, text, imageSrc }, key) => (
          <Tool key={key}>
            <Image src={imageSrc} />
            <Content>
              <ToolTitle level={3}>{title}</ToolTitle>
              <ToolText level={2}>{text}</ToolText>
            </Content>
          </Tool>
        ))}
      </Section>
    </Wrap>
  );
};

const Wrap = styled(Container)`
  background-color: #f9f9fb;
`;

const Tool = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  padding-top: 20px;
  padding-bottom: 82px;
  width: 100%;
  text-align: left;
`;

const ToolTitle = styled(Title)``;

const ToolText = styled(Text)`
  padding-top: 10px;
`;
