import { createContext, ReactNode, useContext } from "react";
import { AddOn, FormInterface } from "../@types";
import { FormHook } from "../hooks/FormHook";
interface Context {
  setInfo: React.Dispatch<React.SetStateAction<FormInterface>>;
  info: FormInterface;
  setMonthYear: React.Dispatch<React.SetStateAction<boolean>>;
  monthYear: boolean;
  Plans: () => {
    name: string;
    icon: string;
    price: number;
  }[];
  AddOns: () => {
    name: string;
    price: number;
    description: string;
  }[];

  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}
const Context = createContext<Context>({} as Context);
export const AppContext = ({ children }: { children: ReactNode }) => {
  const {
    setInfo,
    info,
    monthYear,
    setMonthYear,
    Plans,
    AddOns,
    currentStep,
    setCurrentStep,
  } = FormHook();
  return (
    <Context.Provider
      value={{
        setInfo,
        info,
        monthYear,
        setMonthYear,
        Plans,
        AddOns,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useApp = () => useContext(Context);
