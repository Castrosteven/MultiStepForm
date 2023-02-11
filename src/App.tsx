import { Button } from "./components/UI/Button";
import { useApp } from "./contexts/AppContext";

const App = () => {
  const { info, steps, setCurrentStep, currentStep } = useApp();
  const Next = () => {
    setCurrentStep((current) => current + 1);
  };
  const Back = () => {
    setCurrentStep((current) => current - 1);
  };
  const ConfirmButton = () => {
    setCurrentStep(4);
  };
  const copy = [...steps];
  copy.pop();
  const disableNext = () => {
    const { email, name, phoneNumber, addOns, plan } = info;
    switch (currentStep) {
      // INFO PAGE
      case 0:
        if (
          (currentStep === 0 && email === "") ||
          name === "" ||
          phoneNumber === ""
        ) {
          return true;
        }
        return false;
      // plan
      case 1:
        if (plan.planName === "") {
          return true;
        }
        return false;
      // Addon
      case 2:
        return false;
    }
  };
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between w-full relative font-bold">
      <div className="bg-mobile-header h-1/4 bg-no-repeat w-full flex justify-center items-start bg-center bg-cover">
        <div className="flex gap-5 pt-20">
          {copy.map((_step, index) => {
            return (
              <div
                className={`${
                  currentStep === index
                    ? "bg-blue-200 w-10 h-10 text-center flex items-center justify-center rounded-full font-bold"
                    : "border-white border-2 text-white w-10 h-10 text-center flex items-center justify-center rounded-full font-bold"
                } `}
                key={index}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
      {/* STEPS */}
      <div className="absolute w-full mt-52 flex justify-center items-center">
        {steps[currentStep]}
      </div>
      {/* BUTTONS */}
      <div className="h-24 flex items-center justify-end p-5 bg-white">
        {currentStep !== 4 && (
          <div className="flex justify-between w-full">
            {currentStep !== 0 ? (
              <button onClick={Back}> Go Back </button>
            ) : (
              <div></div>
            )}
            {currentStep < 3 ? (
              <div className="justify-self-end">
                <Button disabled={disableNext()} onClick={Next}>
                  Next Step
                </Button>
              </div>
            ) : (
              <Button onClick={ConfirmButton}> CONFIRM </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
