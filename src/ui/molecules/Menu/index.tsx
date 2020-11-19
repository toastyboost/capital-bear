import * as React from "react";

import { MenuContainer, MenuLink, AnchorLink } from "./styles";

type MenuProps = {
  className?: string;
  data: { slug: string; caption: string }[];
};

export const Menu: React.FC<MenuProps> = ({ className, data }) => {
  return (
    <MenuContainer className={className}>
      {data.map(({ slug, caption }, key) => {
        const linkProps = {
          to: slug,
          children: caption,
          key,
        };
        return slug.includes("#") ? <AnchorLink {...linkProps} /> : <MenuLink {...linkProps} />;
      })}
    </MenuContainer>
  );
};
