import React from "react";
import s from "./Navigation.styles";
import { useStore } from "../../StoreProvider/StoreProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavOption {
  [name: string]: string;
}

interface Props {
  onClose: () => void;
}

export const Navigation: React.FC<Props> = ({ onClose }) => {
  const { user } = useStore();
  const navOptions: NavOption = {
    "New Investment": "/",
    "My Account": "/account",
    "My Investments": "/investments",
    Settings: "/settings",
  };

  return (
    <s.Wrapper>
      <s.Header>
        {user.name}
        <s.CloseButton aria-label="Close navigation" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </s.CloseButton>
      </s.Header>
      <s.Options>
        {Object.keys(navOptions).map((option) => (
          <s.Option key={option}>
            <s.OptionLink to={navOptions[option]}>{option}</s.OptionLink>
          </s.Option>
        ))}
      </s.Options>
    </s.Wrapper>
  );
};
