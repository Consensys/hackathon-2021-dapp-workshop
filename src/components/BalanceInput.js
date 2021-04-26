import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import { colors } from '../theme';

const InputContainer = styled.div`
  border: 1px solid ${colors.green};
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${colors.green};
    padding: 5px;
  }
`;

const BalanceInput = ({ balance, value, setValue }) => {
  return (
    <InputContainer>
      <div className="d-flex justify-content-between mb-3">
        <Text color={colors.green}>From</Text>
        <Text color={colors.green}>Balance: {typeof balance === 'number' ? balance : '--'}</Text>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          if (setValue && e.target.value >= 0) {
            setValue(e.target.value);
          }
        }}
      />
    </InputContainer>
  );
};

export default BalanceInput;
