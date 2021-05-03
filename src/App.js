import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { AppContextProvider } from './AppContext';

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

const App = () => {
  return (
    <AppContextProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Web3ReactProvider>
    </AppContextProvider>
  );
};

export default App;
