import { ReactNode } from "react";
import "./styles.css";

type Props = {
  classNames?: string[];
  children: ReactNode;
};

const Button: React.FC<Props> = ({ classNames = [], ...props }) => {
  const classes = ["btn", ...classNames].filter(Boolean).join(" ").trim();
  return <button className={classes} {...props}></button>;
};

export default Button;
