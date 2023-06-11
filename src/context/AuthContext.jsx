import { useReducer } from "react";
import { createContext } from "react";
import { setItem } from "../utils/localStorage";

const AuthContext = createContext();

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const loginReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "login":
        return {
          ...state,
          userState: action.payload
        }
      case "logout":
        setItem("loginUser", null);
        return {
          ...state,
          userState: null,
        };
      case "updateUser":
        return;
      default:
        return state;
    }
  };
  const [userState, dispatch] = useReducer(loginReducer, null);

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
