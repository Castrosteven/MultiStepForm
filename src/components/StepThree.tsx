import { Container } from "./Container";
import { useApp } from "../contexts/AppContext";
export const StepThree = () => {
  const { monthYear, setInfo, info, AddOns } = useApp();
  const addHandler = ({ name, price }: { name: string; price: number }) => {
    const copy = [...info.addOns];
    copy.push({
      addOnName: name,
      addOnPrice: price,
    });
    setInfo((current) => ({ ...current, addOns: copy }));
  };
  const removeHandler = ({ name }: { name: string }) => {
    setInfo((current) => {
      const copy = [...current.addOns];
      const newCopy = copy.filter((item) => item.addOnName !== name);
      return {
        ...current,
        addOns: newCopy,
      };
    });
  };
  const checkHandler = ({ name, price }: { name: string; price: number }) => {
    const exits = info.addOns.some((addon) => addon.addOnName === name);
    if (exits) {
      removeHandler({ name });
      return;
    }
    addHandler({
      name,
      price,
    });
    return;
  };
  const isChecked = ({ name }: { name: string; price: number }) => {
    return info.addOns.some((addon) => addon.addOnName === name);
  };
  return (
    <Container>
      <div className="text-2xl font-bold text-primaryBlue">Pick add-ons</div>
      <div className="text-lg font-medium text-secondaryGray">
        Add-ons help enhance your gaming <br /> experience.
      </div>
      <div className="flex flex-col gap-5 pt-10">
        {AddOns().map((addon, index) => {
          return (
            <div
              key={index}
              className={` hover:bg-lightBlue text-primaryBlue  justify-between flex ${
                isChecked(addon) ? "bg-lightBlue border-purple-600" : "bg-white"
              }  hover:border-purple-400 w-full border-2 border-gray-200 h-20 rounded-md flex items-center justify-start p-10`}
            >
              <div className="flex items-center gap-5  ">
                <input
                  className="w-6 h-6 rounded-lg accent-indigo-500 cursor-pointer"
                  onChange={() => {
                    checkHandler({
                      name: addon.name,
                      price: addon.price,
                    });
                  }}
                  type={"checkbox"}
                  checked={isChecked(addon)}
                />
                <div>
                  <p className="text-primaryBlue">{addon.name}</p>
                  <p className="text-secondaryGray">{addon.description}</p>
                </div>
              </div>
              <p className="text-purple-600 font-medium">
                ${addon.price}/{monthYear ? "mo" : "year"}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
