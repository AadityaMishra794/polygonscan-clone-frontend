// App.js

import React from 'react';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Main from './Components/Main';
import Footer from './Components/Footer';

import Trnx from './Pages/Trnx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header><Header /></header>
      
      <main id='main-container'>
        <Main/>
        <Dashboard/>
        {/* <Feature /> */}
      </main >
      
      
      <footer><Footer /></footer>
      
    </div>
  );
}

export default App;