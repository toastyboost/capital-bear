import * as React from "react";
import styled from "styled-components";
import { Link } from "../Link";
import LogoBlack from "~/static/logo-black.svg";
import LogoWhite from "~/static/logo-white.svg";

const logos = {
  white: LogoWhite,
  black: LogoBlack,
};

 
export const Logo = ({ className, type = "black" }) => (
  <Wrap href="/" className={className}>
    <LogoImage src={logos[type]} />
  </Wrap>
);

const Wrap = styled(Link)`
  height: 18px;
`;

const LogoImage = styled.img`
  width: 100%;
`;
