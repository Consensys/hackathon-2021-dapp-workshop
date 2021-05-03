import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import BalanceInput from '../../components/BalanceInput';
import Card from '../../components/Card';
import Button from 'react-bootstrap/Button';
import { colors } from '../../theme';
import { ArrowDown } from 'react-bootstrap-icons';
import { useCEth } from '../../hooks/useCEth';
import { useAppContext } from '../../AppContext';

const ModalSkeleton = styled.div`
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

const CompInteractionModal = () => {
  const [depositAmount, setDepositAmount] = useState(0);
  const [convertedAmount] = useState(0);

  const { deposit, getCtokenExchangeRate } = useCEth();
  const { ethBalance } = useAppContext();

  const handleDepositSubmit = () => {
    deposit(depositAmount);
  };

  const newCEthBal = useMemo(() => {
    return Number(depositAmount * 1.3).toFixed(4);
  }, [depositAmount]);

  const [exchangeRate, setExchangeRate] = useState(0);
  console.log(exchangeRate);

  useEffect(() => {
    const fetchRate = async () => setExchangeRate(await getCtokenExchangeRate());
    fetchRate();
  }, []);

  return (
    <ModalSkeleton show>
      <Card style={{ maxWidth: 420 }}>
        <Text block t2 color={colors.green} className="mb-3">
          Deposit
        </Text>
        <BalanceInput balance={ethBalance} value={depositAmount} setValue={setDepositAmount} currency="eth" />
        <ArrowDown color={colors.green} size={36} style={{ margin: '1rem auto' }} />
        <BalanceInput balance={newCEthBal} value={convertedAmount} currency="cEth" title="To" />
        <Button variant="outline-dark" disabled={depositAmount <= 0} className="mt-3" onClick={handleDepositSubmit}>
          Deposit {depositAmount} ETH
        </Button>
      </Card>
    </ModalSkeleton>
  );
};

export default CompInteractionModal;
