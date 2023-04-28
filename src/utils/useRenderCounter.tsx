import { useEffect, useRef } from "react";

export const useRenderCounter = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current)
      ref.current.innerText = String(Number(ref.current.innerText || "0") + 1);
  });

  return (
    <span
      style={{
        backgroundColor: "#ccc",
        borderRadius: 4,
        padding: "0 5px",
        margin: "0 5px",
      }}
      ref={ref}
    ></span>
  );
};
