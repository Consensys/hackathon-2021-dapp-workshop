import React, { createContext, useReducer } from 'react';

const initialContext = {};

const appReducer = (state, { type, payload }) => {
  return state;
};

const AppContext = createContext(initialContext);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialContext);
  const contextValue = {};

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
