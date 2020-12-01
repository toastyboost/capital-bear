import * as React from "react";
import styled from "styled-components";
import { Link } from "~/ui/atoms";
import arrowRight from "~/static/arrow-right.svg";

export const Button = ({ children, className, href, type }) => {
  return (
    <Wrap className={className} href={href} type={type}>
      {children}
    </Wrap>
  );
};

const Wrap = styled(Link)`
  font-family: "Manrope";
  background-color: var(--primary);
  font-size: 16px;
  line-height: 60px;
  color: #fff;
  padding: 0 25px 0 32px;
  border-radius: 50px;
  font-weight: 600;
  white-space: nowrap;
  display: inline-block;
  max-width: 220px;
  position: relative;
  transition: 0.2s;

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

  &:hover {
    transform: scale(1.1);
  }

  ${(p) =>
    p.type === "ghost" &&
    `
    background-color: transparent;
    color: var(--primary);
    padding: 0;

    &:after {
      content:'→'; 
      background-image: none;
    }
    
    &:before {
      transition: 0.2s;
    }

    &:hover {
      transform: scale(1);
      
      &:before {
        content: '';
        height: 1px;
        background-color:rgba(105, 57, 207, 0.4);
        position: absolute;
        bottom: 14px;
        left: 0;
        width: calc(100% + 8px);
       }
     }
  `}
`;
