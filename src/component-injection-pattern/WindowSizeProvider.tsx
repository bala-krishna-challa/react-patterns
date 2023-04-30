import { useEffect, useState } from "react";
import { Size } from "./types";

interface Props {
  render: React.FC<Partial<Size>>;
}

const WindowSizeProvider: React.FC<Props> = ({ render: View }) => {
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

  return <View {...size} />;
};

export default WindowSizeProvider;
