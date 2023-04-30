import WindowDimensions from "./WindowDimensions";
import WindowSizeProvider from "./WindowSizeProvider";

// Injecting Component is much cleaner than render props
function WindowSizeConsumer() {
  return <WindowSizeProvider render={WindowDimensions} />;
}

export default WindowSizeConsumer;
