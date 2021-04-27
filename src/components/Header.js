import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import MetamaskConnectButton from './MetmaskConnectButton';
import useEth from '../hooks/useEth';
import { useWeb3React } from '@web3-react/core';

const Header = () => {
  const { account } = useWeb3React();
  const { getBalance } = useEth();

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchAndSetBalance = async () => {
      setBalance(await getBalance());
    };

    if (account) {
      fetchAndSetBalance();
    }
  }, [account]);

  return (
    <Navbar className="justify-content-between">
      <div>balance: {balance}</div>
      <MetamaskConnectButton />
    </Navbar>
  );
};

export default Header;
