// If you are coming from Web3.js, this is one of the biggest differences you will encounter using ethers.

// The ethers library creates a strong division between the operation a Provider
// can perform and those of a Signer, which Web3.js lumps together.

// This separation of concerns and a stricted subset of Provider operations allows
// for a larger variety of backends, a more consistent API and ensures other libraries
// to operate without being able to rely on any underlying assumption.

import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';

const useEth = () => {
  const { active, library, account } = useWeb3React();

  const getBalance = async () => {
    if (library && active && account) {
      const balance = await library.getBalance(account);
      return parseFloat(formatEther(balance)).toPrecision(4);
    }
    return '--';
  };

  return { getBalance };
};

export default useEth;
