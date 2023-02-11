import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = ({ ...rest }: Props) => {
  return (
    <button
      className="pl-5 pr-5 pt-3 pb-3 rounded-md bg-primaryBlue text-white disabled:bg-gray-400"
      {...rest}
    />
  );
};
