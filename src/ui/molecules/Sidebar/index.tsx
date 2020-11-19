import * as React from "react";

import {
  //
  AsideBackground,
  Aside,
  AsideHeader,
  AsideBurger,
  AsideContent,
} from "./styles";

type SidebarProps = {
  className?: string;
  isVisible: boolean;
  toggler: (value: boolean) => boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({ className, isVisible, toggler }) => {
  return (
    <>
      <AsideBackground
        aria-visible={isVisible}
        className={className}
        onClick={() => toggler(!isVisible)}
      />
      <Aside isVisible={isVisible}>
        <AsideHeader>
          <AsideBurger isVisible={isVisible} onClick={() => toggler(!isVisible)} />
        </AsideHeader>
        <AsideContent>Content</AsideContent>
      </Aside>
    </>
  );
};
