import * as React from "react";

import { MenuContainer, MenuLink, AnchorLink } from "./styles";

type MenuProps = {
  className?: string;
  data: { path: string; title: string }[];
};

export const Menu: React.FC<MenuProps> = ({ className, data }) => {
  return (
    <MenuContainer className={className}>
      {data.map(({ path, title }, key) => {
        return <>{title}</>;
      })}
    </MenuContainer>
  );
};
