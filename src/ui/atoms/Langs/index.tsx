import * as React from "react";
import styled from "styled-components";

import arrow from "~/static/arrow-white.svg";

type Props = {
  className?: string;
};

const langs = [
  {
    name: "English",
    link: "en",
  },
  {
    name: "Arabic",
    link: "ar",
  },
];

export const Langs: React.FC<Props> = ({ className }) => {
  const [lang, setLang] = React.useState("English");

  return (
    <Wrap className={className}>
      <Label>{lang}</Label>
      <Dropdown>
        {langs.map(({ name, link }) => (
          <Item
            key={link}
            href={link}
            data-active={name === lang}
            onClick={() => setLang(name)}
          >
            {name}
          </Item>
        ))}
      </Dropdown>
    </Wrap>
  );
};

const Label = styled.div`
  color: #fff;
  line-height: 32px;
  padding: 0 16px 0 16px;
  transition: 0.2s;
  border: 1px solid transparent;
  border-radius: 50px;
  cursor: default;

  &:after {
    content: "";
    display: inline-block;
    background-image: url(${arrow});
    width: 15px;
    height: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 8px;
    transform: rotate(90deg);
    position: relative;
    bottom: -5px;
    opacity: 0.5;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 28px;
  left: -24px;
  opacity: 0;
  transition: 0.2s;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  width: 190px;
  padding: 8px;
  border-radius: 10px;
  visibility: hidden;
  transform: translateY(-6px);
`;

const Item = styled.a`
  font-size: 14px;
  color: var(--text-color);
  padding: 12px 15px;
  display: block;
  transition: 0.2s;
  border-radius: 10px;

  &:hover {
    background-color: rgb(245, 245, 247);
  }

  &[data-active="true"] {
    color: var(--primary);
  }
`;

const Wrap = styled.div`
  position: relative;
  font-family: "Manrope";
  font-weight: 600;
  font-size: 14px;

  &:hover {
    ${Dropdown} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    ${Label} {
      border-color: var(--primary);

      &:after {
        transform: rotate(270deg);
        bottom: 4px;
      }
    }
  }
`;
