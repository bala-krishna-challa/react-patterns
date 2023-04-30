import { PropsWithChildren } from "react";
import "./styles.css";

type Props = {
  classNames?: string[];
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  classNames = [],
  ...props
}) => {
  const classes = ["btn", ...classNames].filter(Boolean).join(" ").trim();
  return <button className={classes} {...props}></button>;
};

export default Button;
