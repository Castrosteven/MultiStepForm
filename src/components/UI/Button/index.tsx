import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = ({ ...rest }: Props) => {
  return (
    <button
      className="p-2 rounded-md bg-primaryBlue text-white disabled:bg-gray-400"
      {...rest}
    />
  );
};
