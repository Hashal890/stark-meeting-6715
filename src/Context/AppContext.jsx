import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, {
    isAuth: true,
    token: null,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
