import React from "react";
import s from "./Select.styles";

export interface SelectOption {
  id: string;
  name: string;
}

interface Props {
  items: SelectOption[];
  value: string;
  onSelect: (id: string) => void;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  placeholder?: string;
}

export const Select: React.FC<Props> = ({
  items,
  value,
  onSelect,
  ariaLabel,
  ariaLabelledBy,
  placeholder,
}) => {
  return (
    <s.Select
      aria-label={ariaLabelledBy ? undefined : ariaLabel}
      aria-labelledby={ariaLabelledBy}
      onChange={(e) => onSelect(e.target.value)}
      placeholder={placeholder}
      defaultValue="none"
    >
      <option value="none" placeholder={placeholder} disabled>
        {placeholder}
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </s.Select>
  );
};
