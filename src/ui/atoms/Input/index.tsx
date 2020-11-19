import * as React from "react";

import { FieldContainer, Field } from "./styles";

type InputProps = {
  value: string;
  placeholder: string;
  isInvalid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ value, placeholder, isInvalid, onChange }) => (
  <FieldContainer>
    <Field value={value} placeholder={placeholder} aria-invalid={isInvalid} onChange={onChange} />
  </FieldContainer>
);
