import { useMemo } from 'react';
import useActiveWallet from './useActiveWallet';

const supportedCompNetworks = [1, 42]; // mainnet, kovan

function useIsValidNetwork() {
  const { chainId, signingType } = useActiveWallet();

  const isValidCompNetwork = useMemo(() => {
    return supportedCompNetworks.includes(chainId) || signingType === 'ledger';
  }, [chainId, signingType]);

  return {
    isValidNetwork: isValidCompNetwork,
  };
}

export default useIsValidNetwork;
