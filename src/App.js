import React from 'react';

import './App.css'

import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Transaction from './Components/Transaction';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Main/>
      <Dashboard/>
      <Footer/>
    
    </div>
  );
}

export default App;
