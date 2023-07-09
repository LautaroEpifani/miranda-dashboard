import React, { Dispatch,  useReducer } from "react";
import { createContext } from "react";
import { LoginUser } from "../interfaces/interfaces";
import { getItem } from "../utils/localStorage";

const INITIAL_STATE = {
    userState: { userName: "", email: "", password: ""},
    dispatch: () => [],
}



type GlobalContent = {
    userState: LoginUser;
    dispatch: Dispatch<LoginActions>;
}

type LoginActions =  { type: 'login' | 'logout' | 'updateUser', payload: LoginUser} 

interface Props {
    children: JSX.Element | JSX.Element[]
}

const AuthContext = createContext<GlobalContent>(INITIAL_STATE);

export default AuthContext;

export const AuthContextProvider = ({ children }: Props) => {
  const loginReducer = (state: LoginUser, action: LoginActions): LoginUser => {
    switch (action.type) {
      case "login":     
        return action.payload
      case "logout":
        const newObj =  { userName: "", email: "", password: ""};
        return newObj;
      case "updateUser":
        return state;
      default:
        return state;
    }
  };
  const [userState, dispatch] = useReducer(loginReducer, getItem("loginUser"));

  return (
    <AuthContext.Provider
      value={{
        userState,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
