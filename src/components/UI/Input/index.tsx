import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Input = ({ id, label, ...rest }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className=" p-4 text-gray-600 font-semibold rounded-sm border-2 border-gray-200"
        {...rest}
      />
    </div>
  );
};
