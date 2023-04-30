import WindowSizeProvider from "./WindowSizeProvider";
import { Size } from "./types";

// Render props is more cleaner than Function as Child Component
// The code is more readable with naming convention along their own responsibilities
const renderWindowDimensions = ({ width, height }: Size) => (
  <div>{`${width} - ${height}`}</div>
);

function WindowSizeConsumer() {
  return <WindowSizeProvider render={renderWindowDimensions} />;
}

export default WindowSizeConsumer;
