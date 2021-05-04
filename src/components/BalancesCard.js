import React, { useEffect } from 'react';
import Text from './Text';
import Card from './Card';
import { colors } from '../theme';
import { useWeb3React } from '@web3-react/core';
import useEth from '../hooks/useEth';
import { useCToken } from '../hooks/useCToken';
import { useAppContext } from '../AppContext';

const BalanceCard = () => {
  const { account } = useWeb3React();
  const { fetchEthBalance, ethBalance } = useEth();
  const { fetchCTokenBalance, cTokenBalance } = useCToken();

  useEffect(() => {
    if (account) {
      fetchEthBalance();
      fetchCTokenBalance();
    }
  }, [account]);

  return (
    <Card style={{ maxWidth: 300 }}>
      <Text block color={colors.green}>
        ETH balance: {ethBalance}
      </Text>
      <Text block color={colors.green}>
        cETH balance: {cTokenBalance}
      </Text>
    </Card>
  );
};

export default BalanceCard;
