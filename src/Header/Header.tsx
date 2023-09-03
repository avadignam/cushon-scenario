import React from "react";
import s from "./Header.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <s.Wrapper>
      <s.Cushon href="/">cushon</s.Cushon>
      <s.User>
        Ava Dignam
        <i>
          <FontAwesomeIcon icon={faUser} />
        </i>
      </s.User>
    </s.Wrapper>
  );
};
