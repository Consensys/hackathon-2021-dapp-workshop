import { useCallback, useEffect, useMemo } from 'react';
import { useContract } from './useContract';
import { C_ETH_CONTRACT_ADDRESS } from '../static/contracts';
import C_ETH_ABI from '../static/cEthABI';
import useIsValidNetwork from '../hooks/useIsValidNetwork';
import { useWeb3React } from '@web3-react/core';

export const useCEth = () => {
  const { account, chainId } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();

  const cEthContractAddress = useMemo(() => {
    return (chainId && C_ETH_CONTRACT_ADDRESS[chainId]) || C_ETH_CONTRACT_ADDRESS[1];
  }, [chainId]);

  const cEthContract = useContract(cEthContractAddress, C_ETH_ABI);

  const fetchCEthBalance = useCallback(async () => {
    if (account && isValidNetwork) {
    }
  }, [account, cEthContractAddress]);

  const stake = useCallback(
    async (amount) => {
      if (account && isValidNetwork) {
      }
    },
    [account, cEthContractAddress],
  );

  useEffect(() => {
    if (account && isValidNetwork) {
      fetchCEthBalance();
    }
  }, [account, cEthContractAddress, isValidNetwork, chainId]);

  return {
    fetchCEthBalance,
    stake,
  };
};






// const main = async function () {
//   let ethBalance = (await web3.eth.getBalance(myWalletAddress)) / Math.pow(10, ethDecimals);
//   console.log("My wallet's ETH balance:", ethBalance, '\n');
//
//   console.log('Supplying ETH to the Compound Protocol...', '\n');
//   // Mint some cETH by supplying ETH to the Compound Protocol
//   await cEthContract.mint({
//     from: myWalletAddress,
//     gasLimit: web3.utils.toHex(150000),
//     gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
//     value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
//   })
//
//   console.log('cETH "Mint" operation successful.', '\n');
//
//   const balanceOfUnderlying =
//     web3.utils.toBN(await cEthContract.methods.balanceOfUnderlying(myWalletAddress).call()) / Math.pow(10, ethDecimals);
//
//   console.log('ETH supplied to the Compound Protocol:', balanceOfUnderlying, '\n');
//
//   let cTokenBalance = (await cEthContract.methods.balanceOf(myWalletAddress).call()) / 1e8;
//
//   console.log("My wallet's cETH Token Balance:", cTokenBalance, '\n');
//
//   let exchangeRateCurrent = await cEthContract.methods.exchangeRateCurrent().call();
//   exchangeRateCurrent = exchangeRateCurrent / Math.pow(10, 18 + ethDecimals - 8);
//   console.log('Current exchange rate from cETH to ETH:', exchangeRateCurrent, '\n');
//
//   console.log('Redeeming the cETH for ETH...', '\n');
//
//   console.log('Exchanging all cETH based on cToken amount...', '\n');
//   await cEthContract.methods.redeem(cTokenBalance * 1e8).send({
//     from: myWalletAddress,
//     gasLimit: web3.utils.toHex(500000),
//     gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
//   });
//
//   // console.log('Exchanging all cETH based on underlying ETH amount...', '\n');
//   // let ethAmount = web3.utils.toWei(balanceOfUnderlying).toString()
//   // await cEthContract.methods.redeemUnderlying(ethAmount).send({
//   //   from: myWalletAddress,
//   //   gasLimit: web3.utils.toHex(150000),
//   //   gasPrice: web3.utils.toHex(20000000000), // use ethgasstation.info (mainnet only)
//   // });
//
//   cTokenBalance = (await cEthContract.methods.balanceOf(myWalletAddress).call()) / 1e8;
//   console.log("My wallet's cETH Token Balance:", cTokenBalance);
//
//   ethBalance = (await web3.eth.getBalance(myWalletAddress)) / Math.pow(10, ethDecimals);
//   console.log("My wallet's ETH balance:", ethBalance, '\n');
// };