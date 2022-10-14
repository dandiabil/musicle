import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [play, setPlay] = useState('');

  return (
    <AppContext.Provider
      value={{
        showSpinner,
        setShowSpinner,
        play,
        setPlay
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};