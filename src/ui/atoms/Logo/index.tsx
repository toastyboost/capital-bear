import * as React from "react";
import styled from "styled-components";
import { Link } from "../Link";
import { MEDIA } from "~/libs/media";
import LogoBlack from "~/static/logo-black.svg";

const logos = {
  white: LogoBlack,
  black: LogoBlack,
};

type LogoPrrops = {
  type?: "black" | "white";
  className?: string;
};

export const Logo: React.FC<LogoPrrops> = ({ className, type = "black" }) => (
  <Wrap to="/" className={className}>
    <LogoImage src={logos[type]} />
  </Wrap>
);

const Wrap = styled(Link)`
  height: 18px;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 120px;
  height: 18px;
`;
