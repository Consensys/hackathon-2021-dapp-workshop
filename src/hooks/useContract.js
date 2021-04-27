import { useMemo } from 'react';
import {
  Contract,
  // ContractInterface
} from '@ethersproject/contracts';
import { AddressZero } from '@ethersproject/constants';
import { isAddress } from '../utils/isAddress';
import useActiveWallet from './walletConnection/useActiveWallet';

export function useContract(contractAddress, ABI) {
  if (!isAddress(contractAddress) || contractAddress === AddressZero) {
    throw Error(`Invalid 'contractAddress' parameter '${contractAddress}'.`);
  }

  const { library, account } = useActiveWallet();

  const signerOrProvider = account ? library.getSigner(account).connectUnchecked() : library;

  return useMemo(() => {
    return new Contract(contractAddress, ABI, signerOrProvider);
  }, [contractAddress, ABI, signerOrProvider]);
}
