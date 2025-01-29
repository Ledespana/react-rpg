import React from 'react';
import './App.css';
import './scss/styles.css';
import Player from './components/player'

function App() {
  return (
      <div className="zone-container">
        <Player skin="trump-sprite" />
      </div>
  );
}

export default App;
