import React, { Dispatch,  useReducer } from "react";
import { createContext } from "react";
import { getItem } from "../utils/localStorage";

const INITIAL_STATE = {
    userState: { userName: "", email: "", password: ""},
    dispatch: () => [],
}

interface Login {
  userName: string;
  email: string;
  password: string;
}

type GlobalContent = {
    userState: Login;
    dispatch: Dispatch<LoginActions>;
}

type LoginActions =  { type: 'login', payload: Login } 
                        | { type: 'logout', payload: undefined} 
                        | { type: 'updateUser', payload: Login }

interface Props {
    children: JSX.Element | JSX.Element[]
}

const AuthContext = createContext<GlobalContent>(INITIAL_STATE);

export default AuthContext;

export const AuthContextProvider = ({ children }: Props) => {
  const loginReducer = (state: Login, action: LoginActions): Login => {
    console.log(action);
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
  const [userState, dispatch] = useReducer(loginReducer, { userName: "", email: "", password: ""});

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
