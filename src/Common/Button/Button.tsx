import React, { PropsWithChildren } from "react";
import s from "./Button.styles";

interface Props {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  onClick?: () => void;
  selected?: boolean;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  ariaLabel,
  ariaLabelledBy,
  onClick,
  selected = false,
  children,
}) => {
  return (
    <s.Button
      aria-label={ariaLabelledBy ? undefined : ariaLabel}
      aria-labelledby={ariaLabelledBy}
      onClick={onClick}
      selected={selected}
    >
      {children}
    </s.Button>
  );
};
