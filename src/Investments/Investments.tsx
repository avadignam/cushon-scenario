import React from "react";
import s from "./Investments.styles";
import { useStore } from "../StoreProvider/StoreProvider";
import { InvestmentCard } from "./InvestmentCard/InvestmentCard";
import { Button } from "../Common/Button/Button";
import { useNavigate } from "react-router-dom";

export const Investments = () => {
  const { investments } = useStore();
  const navigate = useNavigate();
  return (
    <s.Wrapper>
      <s.Header>
        <h1>Your Investments</h1>
        <Button onClick={() => navigate("/")}>Create New Investment</Button>
      </s.Header>
      {investments.map((i) => (
        <InvestmentCard key={i.id} investment={i} />
      ))}
    </s.Wrapper>
  );
};
