import * as React from "react";
import styled from "styled-components";

type LinkProps = {
  className?: string;
  to?: string;
};

export const Link: React.FC<LinkProps> = ({ children, className, to = "" }) => {
  return (
    <HrefLink href={to} className={className}>
      {children}
    </HrefLink>
  );
};

const HrefLink = styled.a`
  font-family: "Manrope";
  font-weight: 600;
  color: rgb(68, 67, 98);
  font-size: 14px;
`;
