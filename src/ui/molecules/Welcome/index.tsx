import * as React from "react";
import styled from "styled-components";

import { Title, Text } from "~/ui/atoms";
import check from "~/static/check.svg";

export const Welcome = () => {
  return (
    <Wrap>
      <SectionTitle level={1}>
        Instant access to investing, anytime and anywhere
      </SectionTitle>
      <SectionText level={1}>
        Investing has never been easier. Everything you are looking for in an
        ultimate investment platform — on the device of your choice.
      </SectionText>
      <List>
        <Item>$10 000 demo account</Item>
        <Item>$10 minimum deposit</Item>
        <Item>$1 minimum investment</Item>
      </List>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: var(--block-bg);
  padding: 50px;
`;

const SectionTitle = styled(Title)`
  margin-bottom: 20px;
  max-width: 390px;
`;

const SectionText = styled(Text)`
  margin-bottom: 20px;
  max-width: 355px;
`;

const List = styled.ul`
  font-size: 16px;
  line-height: 1;
  color: var(--text);
  font-weight: 500;
`;

const Item = styled.li`
  padding: 8px 0;

  &:before {
    content: "";
    width: 11px;
    height: 8px;
    background-size: cover;
    background-image: url(${check});
    display: inline-block;
    position: relative;
    top: -2px;
    margin-right: 12px;
  }
`;
