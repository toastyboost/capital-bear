import styled from "styled-components";
import { Link } from "gatsby-plugin-intl";

export const RouterLink = styled(Link)`
  &:hover {
    color: var(--link-hover);
  }

  &[aria-current="page"] {
    color: var(--link-active);
  }
`;

export const ExternalLink = styled.a`
  &:hover {
    color: var(--link-hover);
  }
`;
