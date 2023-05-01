import useWindowSize from "./useWindowSize";

const WindowDimensions = () => {
  const { width, height } = useWindowSize();
  return <div>{`${width} - ${height}`}</div>;
};

export default WindowDimensions;
