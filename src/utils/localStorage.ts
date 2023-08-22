import { LoginUser } from "../interfaces/interfaces";

export const getItem = (key: string) => {
  const item = JSON.parse(localStorage.getItem(key) || "{}");
  if (item) {
    return item;
  } else {
    return " ";
  }
};
export const setItem = (key: string, data: LoginUser | string | null) => {
  localStorage.setItem(key, JSON.stringify(data));
};
