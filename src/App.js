import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/Header';
import MainContent from './component/MainContent';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App;
