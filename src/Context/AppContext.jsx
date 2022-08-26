import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const toggleIsAuth = () => {
    setIsAuth(!isAuth);
  };
  
  return (
    <AppContext.Provider value={[isAuth, toggleIsAuth]}>
      {children}
    </AppContext.Provider>
  );
}
