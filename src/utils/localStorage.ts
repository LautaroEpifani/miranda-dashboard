import { LoginUser } from "../interfaces/interfaces";

export const getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "{}");
};
export const setItem = (key: string, data: LoginUser | string | null) => {
  localStorage.setItem(key, JSON.stringify(data));
};
