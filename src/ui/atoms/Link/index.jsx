import * as React from "react";
import styled from "styled-components";

export const Link = ({ children, className, href = "" }) => {
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
