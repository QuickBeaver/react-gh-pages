import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>QuickBeaver</h1>
        <nav className="header-menu">
          <li><a href="/manatee">manatee</a></li>
          <li><a href="/narwhal">narwhal</a></li>
          <li><a href="/whale">whale</a></li>
        </nav>
      </header>
      <div className="wrapper">
        <h1>Marine mammals</h1>
      </div>
    </div>
  );
}

export default App;
