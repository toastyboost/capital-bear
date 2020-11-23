import * as React from "react";
import styled from "styled-components";
import { Title, Text, Icon } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";

type Props = {
  className?: string;
  icon: string;
  title: string;
  description?: string;
};

export const Section: React.FC<Props> = ({ className, children, icon, title, description }) => {
  return (
    <Wrap className={className}>
      <Header className="section-header">
        <SectionIcon name={icon} />
        <SectionTitle level={2}>{title}</SectionTitle>
        {description && <SectionDescription level={1}>{description}</SectionDescription>}
      </Header>
      <Content>{children}</Content>
    </Wrap>
  );
};

const Wrap = styled.section`
  ${MEDIA.PHONE`
    padding-top: 65px;
  `}

  ${MEDIA.DESKTOP`
    padding-top: 85px;
  `};
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const Content = styled.div`
  padding-top: 60px;
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

  ${MEDIA.DESKTOP`
    max-width: 600px;
  `};
`;
