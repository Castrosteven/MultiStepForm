import { StepFour, StepOne, StepThree, StepTwo, ThankYou } from "./components";
import { Button } from "./components/UI/Button";
import { useApp } from "./contexts/AppContext";

const App = () => {
  const labels = [
    { step: "STEP 1", info: "YOUR INFO" },
    { step: "STEP 2", info: "SELECT PLAN" },
    { step: "STEP 3", info: "ADD-ONS" },
    { step: "STEP 4", info: "SUMMARY" },
  ];
  const { info, setCurrentStep, currentStep } = useApp();
  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <ThankYou />,
  ];
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
    <div className="bg-gray-100 h-screen md:flex md:items-center md:justify-center relative ">
      <div className="h-full flex-1 md:h-1/2 md:max-w-6xl md:rounded-md md:flex-row flex flex-col justify-between w-full font-bold md:p-5 md:bg-white ">
        {/* Sidebar/Topbar */}
        <div className="bg-mobile-header md:bg-desktop-header md:rounded-md md:h-full md:w-5/12 h-1/4 bg-no-repeat w-full flex md:justify-center  md:items-start justify-center items-start bg-center bg-cover">
          <div className="flex gap-5 h-full items-center md:flex-col  md:justify-start md:mt-5 md:items-start ">
            {copy.map((_step, index) => {
              return (
                <div
                  key={index}
                  className="md:flex md:gap-5 md:items-center md:text-start"
                >
                  <div
                    className={`${
                      currentStep === index
                        ? "bg-blue-200 w-10 h-10 text-center flex items-center justify-center rounded-full font-bold"
                        : "border-white border-2 text-white w-10 h-10 text-center flex items-center justify-center rounded-full font-bold"
                    } `}
                  >
                    {index + 1}
                  </div>
                  <div className="hidden md:block md:justify-center md:items-center md:flex-col text-white">
                    <p className="font-medium text-secondaryGray">
                      {labels[index].step}
                    </p>
                    <p>{labels[index].info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* STEPS */}
        <div className="h-full flex flex-col md:bg-white md:w-full  w-full relative ">
          <div className="absolute w-full -top-10 md:static  md:m-auto flex justify-center items-center">
            {steps[currentStep]}
          </div>
          {/* BUTTONS */}
          <div className="flex items-center justify-end p-5 md:p-20 bg-white mt-auto md:bg-transparent ">
            {currentStep !== 4 && (
              <div className="flex justify-between w-full">
                {currentStep !== 0 ? (
                  <button onClick={Back}> Go Back </button>
                ) : (
                  <div></div>
                )}
                {currentStep < 3 ? (
                  <div className="">
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
      </div>
    </div>
  );
};
export default App;
