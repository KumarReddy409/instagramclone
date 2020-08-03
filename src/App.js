import React from 'react';
import pic from './assets/instagram.png';
import Post from './Post'


import './App.css';

function App() {
  return (
    <div className="app">
  <div className="header">
    <img src={pic} className="headerimg"
    alt="hello"></img>
  </div>
  <Post username="kumar"></Post>
  <Post/>
  <Post/>
  </div>
  
  
  );
}

export default App;
