import React from 'react';
import Text from './Text';
import Card from './Card';
import { colors } from '../theme';

const BalanceCard = () => {
  return (
    <Card style={{ maxWidth: 300 }}>
      <Text block color={colors.green}>
        ETH balance: --
      </Text>
      <Text block color={colors.green}>
        cETH balance: --
      </Text>
    </Card>
  );
};

export default BalanceCard;
