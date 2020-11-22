import * as React from "react";
import styled from "styled-components";

type LinkProps = {
  className?: string;
  href?: string;
};

export const Link: React.FC<LinkProps> = ({ children, className, href = "" }) => {
  return (
    <HrefLink href={href} className={className}>
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
