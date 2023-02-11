import { useApp } from "../contexts/AppContext";
import { Container } from "./Container";

export const StepFour = () => {
  const { info, monthYear, setCurrentStep } = useApp();
  const { plan } = info;
  const calculateTotal = () => {
    let total = 0;
    info.addOns.forEach((addon) => (total += addon.addOnPrice));
    return total + info.plan.price;
  };
  const moYr = monthYear ? "mo" : "yr";
  return (
    <Container>
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold text-primaryBlue">Finishing Up</p>
        <p className="text-lg font-medium text-secondaryGray">
          Double-check everything looks OK <br /> before confirming
        </p>
        <div className="bg-lightBlue flex flex-col p-5 rounded-md">
          <div className=" flex justify-between  items-center">
            <div className="flex flex-col">
              <p className="text-primaryBlue">
                {plan.planName} {monthYear ? "(Monthly)" : "(Yearly)"}
              </p>
              <span
                onClick={() => {
                  setCurrentStep(1);
                }}
                className="underline text-secondaryGray cursor-pointer"
              >
                Change
              </span>
            </div>
            <div>
              ${plan.price} / {moYr}
            </div>
          </div>
          <hr />
          <div>
            {info.addOns.map((addon, index) => {
              return (
                <div className="flex justify-between mt-5" key={index}>
                  <div className="text-secondaryGray">{addon.addOnName} </div>
                  <div>
                    +${addon.addOnPrice} / {moYr}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between p-5">
          <div>Total {monthYear ? "(per month)" : "(per year)"}</div>
          <div>
            ${calculateTotal()}/{moYr}
          </div>
        </div>
      </div>
    </Container>
  );
};
