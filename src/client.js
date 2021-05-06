import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderMethod = module.hot ? render : hydrate;

export const Client = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

renderMethod(<Client />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
