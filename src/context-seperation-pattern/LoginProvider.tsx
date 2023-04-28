import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import {
  REQ_STATUS_PENDING,
  REQ_STATUS_REJECTED,
  REQ_STATUS_RESOLVED,
  RESET,
} from "./constants";
import { LoginContextAction, LoginContextState, User } from "./types";

const defaultState: LoginContextState = {
  user: { username: "", password: "" },
  error: "",
  status: REQ_STATUS_RESOLVED,
};

export type DispatchType = Dispatch<LoginContextAction>;

/* A pattern that we can follow if we think 
state updating functionality is independent 
from the functionality of state showing */
const LoginStateContext = createContext<LoginContextState>(defaultState);
const LoginUpdaterContext = createContext<DispatchType>(() => {});

const reducer = (
  state: LoginContextState,
  action: LoginContextAction
): LoginContextState => {
  const { type } = action;
  switch (type) {
    case REQ_STATUS_PENDING:
      return { ...state, status: REQ_STATUS_PENDING };
    case REQ_STATUS_REJECTED:
      return { ...state, status: REQ_STATUS_REJECTED, error: action.error };
    case REQ_STATUS_RESOLVED:
      return { ...state, status: REQ_STATUS_RESOLVED, user: action.user };
    case RESET:
      return { ...defaultState };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};

interface Props {
  children: ReactNode;
}

const LoginProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <LoginStateContext.Provider value={state}>
      <LoginUpdaterContext.Provider value={dispatch}>
        {children}
      </LoginUpdaterContext.Provider>
    </LoginStateContext.Provider>
  );
};

const useLoginState = () => {
  const context = useContext(LoginStateContext);
  if (context === undefined) {
    throw new Error("useLoginState must be used inside LoginProvider");
  }

  return context;
};

const useLoginUpdater = () => {
  const context = useContext(LoginUpdaterContext);
  if (context === undefined) {
    throw new Error("useLoginUpdater must be used inside LoginProvider");
  }

  return context;
};

const onLoginFail = (dispatch: DispatchType, error: string) =>
  dispatch({ type: REQ_STATUS_REJECTED, error });
const onLoginSuccess = (dispatch: DispatchType, user: User) =>
  dispatch({ type: REQ_STATUS_RESOLVED, user });
const onLoginPending = (dispatch: DispatchType) =>
  dispatch({ type: REQ_STATUS_PENDING });
const onLoginReset = (dispatch: DispatchType) => dispatch({ type: RESET });

export {
  useLoginState,
  useLoginUpdater,
  LoginProvider,
  onLoginFail,
  onLoginPending,
  onLoginReset,
  onLoginSuccess,
};
