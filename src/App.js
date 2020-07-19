import React from 'react';
import './App.css';
import './scss/styles.css';
import Player from './components/player'

function App() {
  return (
      <div className="zone-container">
        <Player skin="m1" />
        <Player skin="m2" />
      </div>
  );
}

export default App;
