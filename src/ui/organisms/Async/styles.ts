import styled from "styled-components";
import { Wrap } from "~/styles";

export const AsyncContainer = styled.div`
  font-size: 1.6rem;
`;

export const Wrapper = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
  width: 100%;
  border: 1px solid var(--border-color);
  padding: 32px;
`;

export const Title = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

export const ListItem = styled.div`
  width: 100%;
`;
