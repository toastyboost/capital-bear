import * as React from "react";

import { AnchorLink } from "./styles";

type AnchorProps = {
  className?: string;
  to?: string;
}

export const Anchor: React.FC<AnchorProps> = ({ children, className, to }) => {
  const handleClick = () => {
    if (!to) return false;
    const ref = document.querySelector(to);
    ref && ref.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <AnchorLink className={className} onClick={handleClick}>
      {children}
    </AnchorLink>
  );
};
