import * as React from "react";
import styled from "styled-components";
import { Link } from "~/ui/atoms";
import { MEDIA } from "~/libs/media";

export const Menu = ({ className, data }) => {
  return (
    <Wrap className={className}>
      {data.map(({ path, title }) => (
        <MenuLink key={path} href={path}>
          {title}
        </MenuLink>
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const MenuLink = styled(Link)`
  margin: 0 20px;
  white-space: nowrap;

  &:hover {
    color: var(--primary);
  }
  
  ${MEDIA.TABLET`
    margin: 0 15px;
  `}

  ${MEDIA.DESKTOP`
    margin: 0 20px;
  `};

  &:last-child {
    ${MEDIA.TABLET`
      display: none;
    `};

    ${MEDIA.DESKTOP`
      display: inline-block;
    `};
  }
`;
