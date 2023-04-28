import { ReactNode } from "react";

export const AddBorder: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{ border: "1px solid black", padding: "5px 0", margin: "5px 0" }}
    >
      {children}
    </div>
  );
};
