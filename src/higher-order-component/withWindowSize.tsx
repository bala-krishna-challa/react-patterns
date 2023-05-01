import { FC, useEffect, useState } from "react";
import { WindowSize } from "./types";

const withWindowSize = <T extends object>(
  Component: FC<T & WindowSize>
): FC<T> => {
  return (props: T) => {
    const [size, setSize] = useState<WindowSize>({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const windowResizeHandler = (e: UIEvent) => {
        const { innerWidth, innerHeight } = e.target as Window;
        setSize({ width: innerWidth, height: innerHeight });
      };

      window.addEventListener("resize", windowResizeHandler);

      return () => {
        window.removeEventListener("resize", windowResizeHandler);
      };
    }, []);
    return <Component {...props} {...size} />;
  };
};
export default withWindowSize;
