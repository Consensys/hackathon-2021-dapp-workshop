import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import MetamaskConnectButton from './MetamaskConnectButton';
import BalancesCard from './BalancesCard';

const Header = () => {
  return (
    <Navbar className="justify-content-between">
      <BalancesCard />
      <MetamaskConnectButton />
    </Navbar>
  );
};

export default Header;
