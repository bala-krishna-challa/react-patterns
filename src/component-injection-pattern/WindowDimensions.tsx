import { Size } from "./types";

// We are making the access is partial so, no mandatory for
// children to acccess all properties forwarded by parent
const WindowDimensions: React.FC<Partial<Size>> = ({ width, height }) => (
  <div>{`${width} - ${height}`}</div>
);

export default WindowDimensions;
