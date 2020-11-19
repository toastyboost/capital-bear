import * as React from "react";

import { Link } from "../Link";
import { LogoContainer, LogoImg } from "./styles";

import LogoSVG from "~/static/logo.svg";

type LogoPrrops = {
  className?: string;
}

export const Logo: React.FC<LogoPrrops> = ({ className }) => (
  <LogoContainer className={className}>
    <Link to="/">
      <LogoImg src={LogoSVG} />
    </Link>
  </LogoContainer>
);
