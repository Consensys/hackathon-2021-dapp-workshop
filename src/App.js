import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import { AppContextProvider } from './AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <Route exact path="/" component={Home} />
    </AppContextProvider>
  );
};

export default App;
