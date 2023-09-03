import React, { useState } from "react";
import s from "./Header.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navigation } from "./Navigation/Navigation";
import { useStore } from "../StoreProvider/StoreProvider";

export const Header = () => {
  const { user, investments } = useStore();
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <>
      <s.Wrapper>
        <s.Cushon href="/">cushon</s.Cushon>
        <s.User onClick={() => setShowNavigation((v) => !v)}>
          {user.name}
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
        </s.User>
      </s.Wrapper>
      {showNavigation && (
        <Navigation onClose={() => setShowNavigation(false)} />
      )}
    </>
  );
};
