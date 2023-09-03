import React from "react";
import s from "./PageNotFound.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export const PageNotFound = () => {
  return (
    <s.Wrapper>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      <div> Page Not Found</div>
    </s.Wrapper>
  );
};
