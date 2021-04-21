import React from 'react';
import { useLoggerContext } from '../../contexts/LoggingContext';
import { useUser } from '../../state/hooks';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';
import { Container } from 'react-bootstrap';
import Text from '../../components/Text';
import MetamaskConnectButton from '../../components/MetmaskConnectButton';

const Home = () => {
  return (
    <Container className="mt-5">
      <Text t0 color="brown">
        this is the comp app for the hackathon
      </Text>
      <MetamaskConnectButton />
    </Container>
  );
};

export default Home;
