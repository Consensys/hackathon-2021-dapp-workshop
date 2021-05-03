import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';
import { useAppContext } from '../AppContext';

const useEth = () => {
  const { active, library, account } = useWeb3React();
  const { setEthBalance } = useAppContext();

  const fetchEthBalance = async () => {
    if (library && active && account) {
      const balance = await library.getBalance(account);
      setEthBalance(parseFloat(formatEther(balance)).toPrecision(4));
    } else {
      setEthBalance('--');
    }
  };

  return { fetchEthBalance };
};

export default useEth;
