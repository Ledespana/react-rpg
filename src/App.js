import React from 'react';
import './App.css';
import './scss/styles.css';
import Sprite from './components/sprite'

function App() {
  return (
      <div className="zone-container">
        <Sprite
          image={'/sprites/skins/m1.png'}
          data={{
            x: 0,
            y: 0,
            h: 32,
            w: 32
          }}
         />
      </div>
  );
}

export default App;
