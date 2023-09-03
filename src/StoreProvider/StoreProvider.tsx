import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { SelectOption } from "../Common/Select/Select";
import { Dayjs } from "dayjs";

export interface Investment {
  id: string;
  fundId: string;
  amount: number;
  createdAt: Dayjs;
}

export interface StoreContextInterface {
  investments: Investment[];
  setInvestments: React.Dispatch<React.SetStateAction<Investment[]>>;
}

export const StoreCtx = createContext<StoreContextInterface>({
  investments: [],
  setInvestments: () => {},
});

export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const value: StoreContextInterface = {
    investments,
    setInvestments,
  };

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
};

export const useStore = () => {
  return useContext(StoreCtx);
};
