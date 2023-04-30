import { ReactNode } from "react";

export interface Size {
  width: number;
  height: number;
}

export type PropsWithChildrenFunction<P, T> = P & {
  children?(data: T): ReactNode;
};
