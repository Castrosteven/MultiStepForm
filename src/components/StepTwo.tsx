import { Container } from "./Container";
import { useApp } from "../contexts/AppContext";
export const StepTwo = () => {
  const { setInfo, info, monthYear, setMonthYear, Plans } = useApp();
  const clickHandler = ({ name, price }: { name: string; price: number }) => {
    setInfo((current) => ({
      ...current,
      plan: {
        planName: name,
        price: price,
      },
    }));
  };
  return (
    <Container>
      <div className="h-full">
        <div className="text-2xl font-bold text-primaryBlue">Select Plan</div>
        <div className="text-lg font-medium text-secondaryGray">
          You have the option of monthly or yearly billing.
        </div>
        <div className="flex flex-col gap-10 pt-10  ">
          <div className="flex flex-col md:flex-row gap-10 h-full">
            {Plans().map((plan, key) => {
              return (
                <div
                  key={key}
                  onClick={() => {
                    clickHandler({
                      name: plan.name,
                      price: plan.price,
                    });
                  }}
                  className={`hover:bg-lightBlue ${
                    info.plan.planName === plan.name
                      ? "bg-lightBlue border-purple-600"
                      : "bg-white"
                  } cursor-pointer hover:border-purple-400 w-full border-2 border-gray-200 h-20 md:h-auto rounded-md flex items-center justify-start p-10`}
                >
                  <div className="flex md:flex-col gap-5 items-center">
                    <img src={plan.icon} alt={plan.name} />
                    <div className="flex flex-col">
                      <p>{plan.name}</p>
                      <p className=" text-secondaryGray font-medium">
                        ${plan.price} {monthYear ? "/mo" : "year"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" bg-lightBlue h-20  flex items-center justify-center gap-10 ">
            <p
              className={`${
                monthYear ? "text-primaryBlue " : "text-secondaryGray "
              }font-bold`}
            >
              Monthly
            </p>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={!monthYear}
                  className="sr-only peer"
                  onChange={() => {
                    setMonthYear((current) => !current);
                  }}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
              </label>
            </div>
            <p
              className={`${
                !monthYear ? "text-primaryBlue " : "text-secondaryGray "
              }font-bold`}
            >
              Yearly
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
