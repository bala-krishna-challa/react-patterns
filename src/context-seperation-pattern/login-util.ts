import { User } from "./types";

const sleep = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

export const login = async (user: User) => {
  await sleep(500);
  if (user.password.length < 6) {
    throw new Error("Incorrect password");
  }

  return { ...user };
};
