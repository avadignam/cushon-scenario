import React from "react";
import s from "./UnderConstruction.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

export const UnderConstruction = () => {
  return (
    <s.Wrapper>
      <FontAwesomeIcon size="5x" icon={faPersonDigging} />
      <s.Text>Under Construction</s.Text>
    </s.Wrapper>
  );
};
