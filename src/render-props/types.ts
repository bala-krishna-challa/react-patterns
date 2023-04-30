import { ReactNode } from "react";

export interface Size {
  width: number;
  height: number;
}

export interface RenderProps<T> {
  (data: T): ReactNode;
}
