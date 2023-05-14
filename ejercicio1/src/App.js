import './App.css';
import React from 'react';
import Home from './components/home/home';
import Barra from './components/navbar/barra';


function App() {
  return (
    <div className="App">
      <Barra></Barra>
      <Home></Home>
    </div>
  );
}

export default App;
