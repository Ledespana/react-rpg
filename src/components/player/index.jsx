import React from 'react';
import Actor from '../actor'
import useKeyPress from '../../hooks/use-key-press';

export default function Player({ skin }) {

  const data = {
    h: 32,
    w: 32,
  }

  useKeyPress((e) => {
    // change the evento from ArrawDown to down
    const dir = e.key.replace("Arrow", "").toLowerCase()

    // prevernt the user from scrolling when press up/down
    e.preventDefault();
  })

  return (
    <Actor
      sprite={`/sprites/skins/${skin}.png`}
      data={data}/>
  )
}
