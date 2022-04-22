import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import DOI from './components/DOI';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <DOI  />
      <Footer />
    </>
  )
};

render(<App />, document.querySelector('#app'));