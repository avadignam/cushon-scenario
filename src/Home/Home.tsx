import React from "react";
import s from "./Home.styles";
import { Button } from "../Common/Button/Button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <s.Wrapper>
      <div>Are you a retail or enterprise user?</div>
      <s.ButtonsWrapper>
        <Button onClick={() => navigate("/user/retail")}>Retail</Button>
        <Button onClick={() => navigate("/user/enterprise")}>Enterprise</Button>
      </s.ButtonsWrapper>
    </s.Wrapper>
  );
};
