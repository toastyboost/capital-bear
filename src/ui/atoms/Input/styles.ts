import styled from "styled-components";

export const FieldContainer = styled.div``;

export const Field = styled.input`
  &[aria-invalid="true"] {
    border: 1px solid var(--warning);
  }
`;
