import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Oracle from './components/oracle/Oracle';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      <header className="App-header">
        <h1 className='App-title'>QuickBeaver</h1>
        <nav className="header-menu">
          <li><a href="/oracle">oracle</a></li>
          <li><a href="/narwhal">narwhal</a></li>
          <li><a href="/whale">whale</a></li>
        </nav>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/oracle' element={<Oracle />}></Route>
        <Route path='/narwhal' element={<Narwhal />}></Route>
        <Route path='/whale' element={<Whale />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
