import { useEffect, useState } from "react";
import { Size } from "./types";

interface Props {
  children: (windowSize: Partial<Size>) => JSX.Element;
}

const WindowSizeProvider: React.FC<Props> = ({ children }) => {
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
  return children({ ...size });
};

export default WindowSizeProvider;
