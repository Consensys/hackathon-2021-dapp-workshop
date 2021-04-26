import React from 'react';
import { Container } from 'react-bootstrap';
import Text from '../../components/Text';
import MetamaskConnectButton from '../../components/MetmaskConnectButton';
import CompInteractionModal from './CompInteractionModal';

const Home = () => {
  return (
    <Container className="mt-5">
      <Text t0 color="brown">
        this is the comp app for the hackathon
      </Text>
      <MetamaskConnectButton />
      <CompInteractionModal />
    </Container>
  );
};

export default Home;
