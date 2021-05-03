import React, { createContext, useReducer } from 'react';

const initialContext = {
  ethBalance: '--',
  setEthBalance: () => {},
  cEthBalance: '--',
  setCEthBalance: () => {},
};

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ETH_BALANCE':
      return {
        ...state,
        ethBalance: payload,
      };

    case 'SET_C_ETH_BALANCE':
      return {
        ...state,
        cEthBalance: payload,
      };
    default:
      return state;
  }
};

const AppContext = createContext(initialContext);
export const useAppContext = () => React.useContext(AppContext);
export const AppContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialContext);

  const contextValue = {
    ethBalance: store.ethBalance,
    setEthBalance: (balance) => {
      dispatch({ type: 'SET_ETH_BALANCE', payload: balance });
    },
    cEthBalance: store.cEthBalance,
    setCEthBalance: (balance) => {
      dispatch({ type: 'SET_C_ETH_BALANCE', payload: balance });
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
