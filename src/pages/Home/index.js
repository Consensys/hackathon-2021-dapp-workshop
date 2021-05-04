import React from 'react';
import { Container } from 'react-bootstrap';
import CompInteractionModal from './CompInteractionModal';
import { useAppContext } from '../../AppContext';
import ConnectWalletModal from '../../components/ConnectWalletModal';
import useWalletConnectionModal from '../../hooks/useWalletConnectionModal';

const Home = () => {
  const { isWalletConnectModalOpen } = useAppContext();

  useWalletConnectionModal();
  return (
    <Container className="mt-5">
      {isWalletConnectModalOpen && <ConnectWalletModal />}
      <CompInteractionModal />
    </Container>
  );
};

export default Home;
