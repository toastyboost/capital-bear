import * as React from "react";

import { RouterLink, ExternalLink } from "./styles";

type LinkProps = {
  className?: string;
  activeClassName?: string;
  to?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<LinkProps> = ({ children, className, activeClassName, to = '', target, onClick }) => {
  const internal = to && /^\/(?!\/)/.test(to);

  return internal ? (
    <RouterLink className={className} to={to} activeClassName={activeClassName} onClick={onClick}>
      {children}
    </RouterLink>
  ) : (
      <ExternalLink className={className} href={to} target={target} onClick={onClick}>
        {children}
      </ExternalLink>
    );
};
