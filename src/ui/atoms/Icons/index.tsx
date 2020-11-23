import * as React from "react";
import styled from "styled-components";

import { icons } from "~/static/icons";

type Props = {
  className?: string;
  name: string;
};

export const Icon: React.FC<Props> = ({ className, name }) => {
  return (
    <Wrap className={className}>
      <Svg src={icons[name]} alt="" />
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 7px 14px -4px rgba(120, 110, 144, 0.13);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.img``;
