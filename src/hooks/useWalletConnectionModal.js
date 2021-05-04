import { useEffect } from 'react';
import useIsValidNetwork from './useIsValidNetwork';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';

function useWalletConnectionModal() {
  const { isValidNetwork } = useIsValidNetwork();
  const { active } = useWeb3React();

  const { setWalletConnectModal, isWalletConnectionModalOpen } = useAppContext();

  useEffect(() => {
    setWalletConnectModal(!active || !isValidNetwork);
  }, [active, isValidNetwork]);

  return {
    isWalletConnectionModalOpen,
    setWalletConnectModal,
  };
}

export default useWalletConnectionModal;
