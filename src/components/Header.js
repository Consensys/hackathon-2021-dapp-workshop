import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import MetamaskConnectButton from './MetmaskConnectButton';

const Header = () => {
  return (
    <Navbar className="justify-content-end">
      <MetamaskConnectButton />
    </Navbar>
  );
};

export default Header;
