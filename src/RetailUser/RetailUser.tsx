import React, { useState } from "react";
import s from "./RetailUser.styles";
import { Select, SelectOption } from "../Common/Select/Select";
import { Input } from "../Common/Input/Input";
import { Button } from "../Common/Button/Button";
import { useStore } from "../StoreProvider/StoreProvider";
import dayjs from "dayjs";

interface CreateInvestmentRequest {
  fundId: string;
  amount: number;
}

export const RetailUser = () => {
  const { investments, setInvestments, funds } = useStore();
  const [investment, setInvestment] = useState<CreateInvestmentRequest>({
    fundId: "",
    amount: 0,
  });
  const [fundError, setFundError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [success, setSuccess] = useState(false);
  setTimeout(() => setSuccess(false), 5000);
  console.log(investments);
  const handleInvest = () => {
    if (investment.fundId.length === 0) {
      setFundError(true);
      return;
    }
    if (investment.amount === 0 || !investment.amount) {
      setAmountError(true);
      return;
    }
    setFundError(false);
    setAmountError(false);
    setSuccess(true);
    setInvestments((investments) => [
      ...investments,
      {
        ...investment,
        createdAt: dayjs(new Date()),
        id: (investments.length + 1).toString(),
      },
    ]);
    setInvestment({ fundId: "", amount: 0 });
  };

  return (
    <s.Wrapper>
      <s.Section>
        Choose a fund:
        <Select
          items={funds}
          ariaLabel="Select a fund to invest in"
          value={investment.fundId}
          onSelect={(id) => {
            setInvestment((investment) => ({ ...investment, fundId: id }));
            fundError && setFundError(false);
          }}
          placeholder="Select a fund to invest in"
        />
        {fundError && <s.Warning>Please select a fund to invest in</s.Warning>}
      </s.Section>
      <s.Section>
        How much would you like to invest?
        <Input
          placeholder="Enter amount..."
          type="number"
          value={investment.amount}
          onChange={(e) => {
            setInvestment((investment) => ({
              ...investment,
              amount: parseInt(e.target.value),
            }));
            (e.target.value || parseInt(e.target.value) > 0) &&
              setAmountError(false);
          }}
        />
        {investment.amount > 20000 && (
          <s.Warning>
            This exceeds the amount that is eligible for tax relief. The
            remaining £{investment.amount - 20000} will not be eligible for tax
            relief.
          </s.Warning>
        )}
        {amountError && (
          <s.Warning>Please input an amount greater than 0</s.Warning>
        )}
        {success && (
          <s.Success>Congratulations on your new investment!</s.Success>
        )}
        <s.ButtonWrapper>
          <Button onClick={handleInvest}>Invest</Button>
        </s.ButtonWrapper>
      </s.Section>
    </s.Wrapper>
  );
};
