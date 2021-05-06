import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';

function useWalletConnectionModal() {
  const { active } = useWeb3React();

  const { setWalletConnectModal } = useAppContext();

  useEffect(() => {
    setWalletConnectModal(!active);
  }, [active]);

  return null;
}

export default useWalletConnectionModal;
