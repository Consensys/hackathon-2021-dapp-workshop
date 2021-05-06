import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import BalanceInput from '../../components/BalanceInput';
import Card from '../../components/Card';
import Button from 'react-bootstrap/Button';
import { colors } from '../../theme';
import { ArrowDown } from 'react-bootstrap-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  overflow: hidden auto;
  z-index: 1;
`;

const CompInteractionCard = () => {
  const [depositAmount, setDepositAmount] = useState(0);

  const handleDepositSubmit = () => {
    console.log('Deposit form submitted');
  };

  return (
    <Container show>
      <Card style={{ maxWidth: 420, minHeight: 400 }}>
        <Text block t2 color={colors.green} className="mb-3">
          Deposit
        </Text>
        <BalanceInput balance={0} value={depositAmount} setValue={setDepositAmount} currency="eth" />
        <ArrowDown color={colors.green} size={36} style={{ margin: '1rem auto' }} />
        <BalanceInput balance={0} value={0} currency="cToken" title="To" />
        <Button variant="outline-dark" disabled={depositAmount <= 0} className="mt-3" onClick={handleDepositSubmit}>
          Deposit {depositAmount} ETH
        </Button>
      </Card>
    </Container>
  );
};

export default CompInteractionCard;
