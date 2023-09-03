import React from "react";
import { Investment, useStore } from "../../StoreProvider/StoreProvider";
import s from "./InvestmentCard.styles";
import { Button } from "../../Common/Button/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  investment: Investment;
}

export const InvestmentCard: React.FC<Props> = ({ investment }) => {
  const { funds } = useStore();
  const fundName = funds.find(({ id }) => id === investment.fundId)?.name || "";
  const navigate = useNavigate();

  return (
    <s.Wrapper>
      <s.FundName>{fundName}</s.FundName>

      <s.AmountAndDate>
        <div>Amount: £{investment.amount}</div>
        <div>
          Investment date: {investment.createdAt.format("ddd D MMM YY")}
        </div>
      </s.AmountAndDate>
    </s.Wrapper>
  );
};
