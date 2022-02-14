import './App.css';
import './logo.svg';
import './App.css';

import {
  Link,
  Route,
  Routes
} from 'react-router-dom'

import About from './component/About';
import Home from './component/Home';
import Messages from './component/Messages';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
      </div>
      <div className="App-intro">
        <Routes >
        <Route exact path="/" element={<Home />}/>
          <Route path="/messages" element={<Messages />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
         
        </div>
    </div>
  );
}

export default App;
