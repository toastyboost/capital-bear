import * as React from "react";
import styled from "styled-components";
import { Link, Burger } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";

type SidebarProps = {
  data: { path: string; title: string }[];
  isVisible: boolean;
  toggler: any;
};

export const Sidebar: React.FC<SidebarProps> = ({
  isVisible,
  toggler,
  data,
}) => {
  return (
    <>
      <SideBackground
        isVisible={isVisible}
        onClick={() => toggler(!isVisible)}
      />
      <Side isVisible={isVisible}>
        <Header>
          <SideBurger isVisible={true} onClick={() => toggler(!isVisible)} />
        </Header>
        <Content>
          {data.map(({ path, title }) => (
            <SidebarLink key={path} href={path}>
              {title}
            </SidebarLink>
          ))}
        </Content>
      </Side>
    </>
  );
};

const SideBackground = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  z-index: 103;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(p) => (p.isVisible ? 1 : 0)};
  visibility: ${(p) => (p.isVisible ? "inherit" : "hidden")};
  transition: all 0.25s ease-in-out;

  ${MEDIA.PHONE`
    display: block;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

const Side = styled.aside<{ isVisible: boolean }>`
  opacity: ${(p) => (p.isVisible ? 1 : 0)};
  visibility: ${(p) => (p.isVisible ? "inherit" : "hidden")};
  transform: translateX(${(p) => (p.isVisible ? 0 : "280px")});
  position: fixed;
  right: 0;
  top: 0;
  max-width: 286px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  transition: all 0.25s ease-in-out;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  z-index: 104;
  background-color: #fff;

  ${MEDIA.PHONE`
    display: block;
  `}

  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(245, 245, 247);
  padding: 10px 44px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideBurger = styled(Burger)`
  margin-left: auto;

  & > div > div {
    background-color: #000;

    &:before,
    &:after {
      background-color: #000;
    }
  }
`;

const SidebarLink = styled(Link)`
  padding: 20px 44px;

  &:hover {
    background-color: rgb(245, 245, 247);
  }
`;
