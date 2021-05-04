import React, { createContext, useReducer } from 'react';

const initialContext = {
  ethBalance: '--',
  setEthBalance: () => {},
  cTokenBalance: '--',
  setCTokenBalance: () => {},
  exchangeRate: 0,
  setExchangeRate: () => {},
  isWalletConnectionModalOpen: false,
  setWalletConnectModal: () => {},
  txnStatus: 'NOT_SUBMITTED',
  setTxnStatus: () => {},
};

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ETH_BALANCE':
      return {
        ...state,
        ethBalance: payload,
      };

    case 'SET_C_TOKEN_BALANCE':
      return {
        ...state,
        cTokenBalance: payload,
      };

    case 'SET_EXCHANGE_RATE':
      return {
        ...state,
        exchangeRate: payload,
      };

    case 'SET_WALLET_MODAL':
      return {
        ...state,
        isWalletConnectModalOpen: payload,
      };

    case 'SET_TXN_STATUS':
      return {
        ...state,
        txnStatus: payload,
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
    cTokenBalance: store.cTokenBalance,
    setCTokenBalance: (balance) => {
      dispatch({ type: 'SET_C_TOKEN_BALANCE', payload: balance });
    },
    exchangeRate: store.exchangeRate,
    setExchangeRate: (rate) => {
      dispatch({ type: 'SET_EXCHANGE_RATE', payload: rate });
    },
    isWalletConnectModalOpen: store.isWalletConnectModalOpen,
    setWalletConnectModal: (open) => {
      dispatch({ type: 'SET_WALLET_MODAL', payload: open });
    },
    txnStatus: store.txnStatus,
    setTxnStatus: (status) => {
      dispatch({ type: 'SET_TXN_STATUS', payload: status });
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
