import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import s from "./EnterpriseUser.styles";

export const EnterpriseUser = () => {
  return (
    <s.Wrapper>
      <FontAwesomeIcon size="5x" icon={faPersonDigging} />
      <s.Text>Under Construction</s.Text>
    </s.Wrapper>
  );
};
