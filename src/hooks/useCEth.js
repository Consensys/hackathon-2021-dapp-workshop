import { useCallback } from 'react';
import { useContract } from './useContract';
import C_ETH_ABI from '../static/cEthABI';
import useIsValidNetwork from '../hooks/useIsValidNetwork';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { formatUnits } from '@ethersproject/units';

export const useCEth = () => {
  const { account } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();

  const cEthContractAddress = '0xd6801a1dffcd0a410336ef88def4320d6df1883e'; // kovan
  const cEthContract = useContract(cEthContractAddress, C_ETH_ABI);
  const { setCEthBalance } = useAppContext();

  const fetchCEthBalance = useCallback(async () => {
    const cTokenBalance = await cEthContract.balanceOf(account);
    setCEthBalance(formatUnits(cTokenBalance, 8));
  }, [account, isValidNetwork]);

  const getCtokenExchangeRate = async () => {
    let exchangeRateCurrent = await cEthContract.exchangeRateCurrent();
    console.log('yoo', exchangeRateCurrent);
    exchangeRateCurrent = exchangeRateCurrent / Math.pow(10, 18 + 18 - 8);
    return exchangeRateCurrent;
  };

  const deposit = useCallback(
    async (amount) => {
      if (account && isValidNetwork) {
        await cEthContract.mint({
          from: account,
          value: amount,
        });
        fetchCEthBalance();
      }
    },
    [account, cEthContractAddress],
  );

  return {
    getCtokenExchangeRate,
    fetchCEthBalance,
    deposit,
  };
};
