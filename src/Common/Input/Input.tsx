import React, { HTMLInputTypeAttribute } from "react";
import s from "./Input.styles";

interface Props {
  type?: HTMLInputTypeAttribute;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export const Input: React.FC<Props> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  ariaLabel,
  ariaLabelledBy,
}) => {
  return (
    <s.Input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      aria-label={ariaLabelledBy ? undefined : ariaLabel}
      aria-labelledby={ariaLabelledBy}
    />
  );
};
