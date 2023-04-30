import WindowSizeProvider from "./WindowSizeProvider";

function WindowSizeConsumer() {
  return (
    <WindowSizeProvider>
      {({ width, height }) => <div>{`${width} - ${height}`}</div>}
    </WindowSizeProvider>
  );
}

export default WindowSizeConsumer;
