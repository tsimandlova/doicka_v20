import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import DOI from './components/DOI';

const App = () => {
  return (
    <>
      <Header />
      <DOI  />
    </>
  )
};

render(<App />, document.querySelector('#app'));