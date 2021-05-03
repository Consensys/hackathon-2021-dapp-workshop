import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useWeb3React } from '@web3-react/core';
import MMLogo from '../static/metamask-logo.svg';
import Text from './Text';
import Card from './Card';
import { injected } from '../connectors';
import { shortenAddress } from '../utils/shortenAddress';

const MetamaskLogo = styled.img.attrs({
  src: MMLogo,
})`
  height: 40px;
`;

const ConnectBtn = styled(Button).attrs({ variant: 'outline-dark' })``;

const MetamaskConnectButton = () => {
  const { activate, active, account, deactivate } = useWeb3React();

  if (active) {
    return (
      <Card className="d-flex flex-row justify-content-between" style={{ width: 350 }}>
        <MetamaskLogo />
        <Text uppercase color="green" t3 lineHeight="40px" className="mx-4">
          {shortenAddress(account)}
        </Text>
        <ConnectBtn onClick={deactivate}>Log Out</ConnectBtn>
      </Card>
    );
  }

  return (
    <Card className="d-flex flex-row justify-content-between" style={{ width: 350 }}>
      <MetamaskLogo />
      <Text uppercase color="green" t3 lineHeight="40px" className="mx-2">
        Metamask
      </Text>
      <ConnectBtn onClick={() => activate(injected)}>Connect</ConnectBtn>
    </Card>
  );
};

export default MetamaskConnectButton;
