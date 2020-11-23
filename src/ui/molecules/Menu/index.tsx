import * as React from "react";
import styled from "styled-components";
import { Link } from "~/ui/atoms";

type MenuProps = {
  className?: string;
  data: { path: string; title: string }[];
};

export const Menu: React.FC<MenuProps> = ({ className, data }) => {
  return (
    <Wrap className={className}>
      {data.map(({ path, title }) => {
        return (
          <MenuLink key={path} href={path}>
            {title}
          </MenuLink>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const MenuLink = styled(Link)`
  margin: 0 21px;
`;
