import { useEffect, useState } from "react";
import { Size } from "./types";

// As WindowSizeProvider is simply providing a piece of logic for
// sharing window size info, we can keep it in a custom hook rather than a Component
const useWindowSize = () => {
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

  return { ...size };
};

export default useWindowSize;
