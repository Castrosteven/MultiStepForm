import { useCallback, useEffect, useState } from "react";
import { FormInterface, Plan, RootObject } from "../@types";
import { StepFour, StepOne, StepThree, StepTwo, ThankYou } from "../components";
import Data from "../data.json";
export const FormHook = () => {
  const { plans, add_ons } = Data as RootObject;
  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <ThankYou />,
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const initialStateInfo = {
    name: "",
    email: "",
    phoneNumber: "",
    plan: {
      planName: "",
      price: 0,
    },
    addOns: [],
  };
  //true == month
  //false == year
  const [monthYear, setMonthYear] = useState(true);
  const [info, setInfo] = useState<FormInterface>(initialStateInfo);
  // Transforms Plans based on the switch
  const Plans = useCallback(() => {
    return plans.map((plan) => {
      return {
        name: plan.plan_name,
        icon: plan.icon,
        price: monthYear ? plan.monthly_price : plan.yearly_price,
      };
    });
  }, [monthYear]);
  // Transforms Addons based on the switch
  const AddOns = useCallback(() => {
    return add_ons.map((addon) => {
      return {
        name: addon.add_on_name,
        price: monthYear ? addon.monthly_price : addon.yearly_price,
        description: addon.add_on_description,
      };
    });
  }, [monthYear]);
  // Updates the prices of the current selected plans and addons, based on the monthly/yearly switch
  useEffect(() => {
    const calculatePlanPrice = ({
      planName,
      price,
    }: {
      planName: string;
      price: number;
    }) => {
      const plan = plans.find((p) => p.plan_name === planName);
      if (plan) {
        return {
          planName: plan.plan_name,
          price: monthYear ? plan.monthly_price : plan.yearly_price,
        };
      }
      return {
        planName,
        price,
      };
    };
    const calculateAddonPrice = ({
      addOnName,
      price,
    }: {
      addOnName: string;
      price: number;
    }) => {
      const addon = add_ons.find((a) => a.add_on_name === addOnName);
      if (addon) {
        return monthYear ? addon.monthly_price : addon.yearly_price;
      }
      return price;
    };
    setInfo((current) => ({
      ...current,
      plan: calculatePlanPrice({ ...current.plan }),
      addOns: [
        ...current.addOns.map((addon) => {
          return {
            ...addon,
            addOnPrice: calculateAddonPrice({
              addOnName: addon.addOnName,
              price: addon.addOnPrice,
            }),
          };
        }),
      ],
    }));
  }, [monthYear]);

  return {
    setInfo,
    setMonthYear,
    Plans,
    AddOns,
    info,
    monthYear,
    steps,
    currentStep,
    setCurrentStep,
  };
};
