import { Children, ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="bg-white w-11/12 rounded-md p-5">{children}</div>;
};
