import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { Dayjs } from "dayjs";
import user from "../Responses/user.json";
import funds from "../Responses/funds.json";
import { SelectOption } from "../Common/Select/Select";

interface User {
  id: string;
  name: string;
}

type Fund = SelectOption;

export interface Investment {
  id: string;
  fundId: string;
  amount: number;
  createdAt: Dayjs;
}

export interface StoreContextInterface {
  investments: Investment[];
  setInvestments: React.Dispatch<React.SetStateAction<Investment[]>>;
  user: User;
  funds: Fund[];
}

export const StoreCtx = createContext<StoreContextInterface>({
  investments: [],
  setInvestments: () => {},
  user: { id: "", name: "" },
  funds: [],
});

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const value: StoreContextInterface = {
    investments,
    setInvestments,
    user,
    funds,
  };

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
};

export const useStore = () => {
  return useContext(StoreCtx);
};
