import * as React from "react";
import styled from "styled-components";

export const Burger = ({
  className,
  isVisible,
  onClick,
}) => {
  return (
    <Wrap className={className} onClick={onClick}>
      <Box>
        <Crest isActive={isVisible} />
      </Box>
    </Wrap>
  );
};

const width = 20;
const height = 2;
const radius = 10;
const theme = "#000";

const Wrap = styled.div`
  position: relative;
  top: -1px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Box = styled.div`
  width: 20px;
  height: 36px;
  display: inline-block;
  position: relative;
`;

const Crest = styled.div`
  display: block;
  top: 50%;
  transform: ${(p) => (p.isActive ? "rotate(-45deg)" : "rotate(0deg)")};
  width: ${width}px;
  height: ${height}px;
  background-color: ${theme};
  border-radius: ${radius}px;
  position: absolute;
  transition: 0.2s ease-in-out;

  &:before,
  &:after {
    width: ${width}px;
    height: ${height}px;
    background-color: ${theme};
    border-radius: ${radius}px;
    position: absolute;
  }

  &:before,
  &:after {
    content: "";
    display: block;
  }

  &:before {
    transition: 0.1s linear;
    transition: 0;
    top: ${(p) => (p.isActive ? 0 : "-7px")};
    opacity: ${(p) => (p.isActive ? 0 : 1)};
  }

  &:after {
    bottom: ${(p) => (p.isActive ? 0 : "-7px")};
    transform: ${(p) => (p.isActive ? "rotate(90deg)" : "rotate(0)")};
    transition: 0.2s ease-in-out;
  }
`;
