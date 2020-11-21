import * as React from "react";
import styled from "styled-components";

import arrowRight from "~/static/arrow-right.svg";
type Props = {
  className?: string;
};

export const Button: React.FC<Props> = ({ children, className }) => {
  return <Wrap className={className}>{children}</Wrap>;
};

const Wrap = styled.button`
  font-family: "Manrope";
  background-color: var(--primary);
  font-size: 16px;
  line-height: 57px;
  color: #fff;
  padding: 0 25px 0 32px;
  border-radius: 50px;
  font-weight: 600;
  white-space: nowrap;

  &:after {
    content: "";
    width: 6px;
    height: 10px;
    display: inline-block;
    background-image: url(${arrowRight});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 15px;
  }
`;
