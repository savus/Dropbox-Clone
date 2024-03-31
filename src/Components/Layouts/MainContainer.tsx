import { ReactNode } from "react";

export const MainContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container">{children}</div>;
};
