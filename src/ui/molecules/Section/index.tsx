import { StringifyOptions } from "querystring";
import * as React from "react";
import styled from "styled-components";
import { Title, Text, Icon } from "~/ui/atoms";

type Props = {
  className?: string;
  icon: string;
  title: string;
  description?: string;
};

export const Section: React.FC<Props> = ({ className, children, icon, title, description }) => {
  return (
    <Wrap className={className}>
      <Header>
        <SectionIcon name={icon} />
        <SectionTitle level={2}>{title}</SectionTitle>
        {description && <SectionDescription level={2}>{description}</SectionDescription>}
      </Header>
      <Content>{children}</Content>
    </Wrap>
  );
};

const Wrap = styled.section`
  padding-top: 67px;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  padding-top: 61px;
  display: flex;
  flex-wrap: wrap;
`;

const SectionIcon = styled(Icon)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-bottom: 15px;
`;

const SectionTitle = styled(Title)`
  width: 100%;
  padding-bottom: 15px;
`;

const SectionDescription = styled(Text)`
  width: 100%;
  color: #27262d;
`;
