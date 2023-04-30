import { useEffect, useState } from "react";
import { RenderProps, Size } from "./types";

interface Props {
  render?: RenderProps<Size>;
}

const WindowSizeProvider: React.FC<Props> = ({ render }) => {
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
  return <>{render ? render({ ...size }) : null}</>;
};

export default WindowSizeProvider;
