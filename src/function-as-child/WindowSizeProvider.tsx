import { useEffect, useState } from "react";
import { PropsWithChildrenFunction, Size } from "./types";

const WindowSizeProvider: React.FC<
  PropsWithChildrenFunction<{}, Partial<Size>>
> = ({ children }) => {
  const [size, setSize] = useState<Size>({
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
  return <>{children ? children({ ...size }) : null}</>;
};

export default WindowSizeProvider;
