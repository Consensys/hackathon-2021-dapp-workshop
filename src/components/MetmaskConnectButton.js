import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useWeb3React } from '@web3-react/core';
import MMLogo from '../static/metamask-logo.svg';
import Text from './Text';
import { colors } from '../theme';
import { injected } from '../connectors';

const MetamaskLogo = styled.img.attrs({
  src: MMLogo,
})`
  height: 40px;
`;

const ConnectBtn = styled(Button).attrs({ variant: 'outline-dark' })``;

const Container = styled.div`
  background-color: ${colors.lightBlue};
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${colors.green};
  display: flex;
  justify-content: space-between;
`;

const MetamaskConnectButton = () => {
  const { activate, active, account, deactivate } = useWeb3React();

  if (active) {
    return (
      <Container>
        <MetamaskLogo />
        <Text uppercase color="green" t3 lineHeight="40px">
          {account}
        </Text>
        <ConnectBtn onClick={deactivate}>Log Out</ConnectBtn>
      </Container>
    );
  }

  return (
    <Container>
      <MetamaskLogo />
      <Text uppercase color="green" t3 lineHeight="40px">
        Metamask
      </Text>
      <ConnectBtn onClick={() => activate(injected)}>Connect</ConnectBtn>
    </Container>
  );
};

export default MetamaskConnectButton;
