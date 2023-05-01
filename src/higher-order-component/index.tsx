import { FC } from "react";
import { WindowSize } from "./types";
import withWindowSize from "./withWindowSize";

interface Props {
  name?: string;
}

const WindowSizeConsumer: FC<Props & WindowSize> = ({
  name = "Screen Dimemensions",
  width,
  height,
}) => {
  return <div>{`${name}:- Width: ${width}, Height: ${height}`}</div>;
};

export default withWindowSize(WindowSizeConsumer);
