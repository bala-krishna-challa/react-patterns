import {
  REQ_STATUS_PENDING,
  REQ_STATUS_REJECTED,
  REQ_STATUS_RESOLVED,
  RESET,
} from "./constants";

export type User = {
  username: string;
  password: string;
};

export type PENDING = typeof REQ_STATUS_PENDING;
export type REJECTED = typeof REQ_STATUS_REJECTED;
export type RESOLVED = typeof REQ_STATUS_RESOLVED;
export type RESET = typeof RESET;

export type Status = PENDING | REJECTED | RESOLVED;

export interface LoginContextState {
  user: User;
  status: Status;
  error: string;
}

export type LoginContextAction =
  | { type: PENDING }
  | { type: REJECTED; error: string }
  | { type: RESOLVED; user: User }
  | { type: RESET };
