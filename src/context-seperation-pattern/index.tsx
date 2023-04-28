import { FormEvent, useState } from "react";
import {
  DispatchType,
  LoginProvider,
  onLoginFail,
  onLoginPending,
  onLoginReset,
  onLoginSuccess,
  useLoginState,
  useLoginUpdater,
} from "./LoginProvider";
import { REQ_STATUS_REJECTED } from "./constants";
import { User } from "./types";
import { getErrorMessage } from "../utils/error-util";
import { login } from "./login-util";
import { useRenderCounter } from "../utils/useRenderCounter";
import { AddBorder } from "../utils/AddBorder";

async function handleLogin(loginDispatch: DispatchType, user: User) {
  onLoginPending(loginDispatch);
  try {
    const response = await login(user);
    onLoginSuccess(loginDispatch, response);
  } catch (e) {
    onLoginFail(loginDispatch, getErrorMessage(e));
  }
}

function Login() {
  const loginDispatch = useLoginUpdater();
  const [form, setForm] = useState({ username: "", password: "" });
  const renderCount = useRenderCounter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(loginDispatch, form);
  };

  const handleReset = () => {
    onLoginReset(loginDispatch);
  };

  return (
    <AddBorder>
      {renderCount}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleReset}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </AddBorder>
  );
}

function LoginDetails() {
  const { user, status, error } = useLoginState();
  const renderCount = useRenderCounter();
  return (
    <AddBorder>
      {renderCount}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{`Status: ${status}`}</pre>
      {status === REQ_STATUS_REJECTED ? <pre>{`Error: ${error}`}</pre> : null}
    </AddBorder>
  );
}

function ContextSeperationPattern() {
  const [, setRender] = useState({});
  const renderCount = useRenderCounter();

  return (
    <AddBorder>
      {renderCount}{" "}
      <button onClick={() => setRender({})}>Force re-render</button>
      <LoginProvider>
        <Login />
        <LoginDetails />
      </LoginProvider>
    </AddBorder>
  );
}

export default ContextSeperationPattern;
