import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import MetamaskConnectButton from './MetmaskConnectButton';
import useEth from '../hooks/useEth';
import { useWeb3React } from '@web3-react/core';
import { useCEth } from '../hooks/useCEth';
import { colors } from '../theme';
import Text from '../components/Text';

const BalanceContainer = styled.div`
  background-color: ${colors.lightGray};
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid ${colors.purple};
  margin: 1rem;
`;

const Header = () => {
  const { account } = useWeb3React();
  const { getBalance } = useEth();
  const { fetchCEthBalance } = useCEth();

  const [balance, setBalance] = useState(0);
  const [cEthBalance, setCEthBalance] = useState(0);

  useEffect(() => {
    const fetchAndSetBalance = async () => {
      setBalance(await getBalance());
    };

    const fetchAndSetCethBalance = async () => {
      setCEthBalance(await fetchCEthBalance());
    };

    if (account) {
      fetchAndSetBalance();
      fetchAndSetCethBalance();
    }
  }, [account]);

  return (
    <Navbar className="justify-content-between">
      <BalanceContainer>
        <Text block color={colors.purple}>
          ETH balance: {balance}
        </Text>
        <Text block color={colors.purple}>
          cETH balance: {cEthBalance}
        </Text>
      </BalanceContainer>
      <MetamaskConnectButton />
    </Navbar>
  );
};

export default Header;
