import React from 'react';
import Actor from '../actor'
import useKeyPress from '../../hooks/use-key-press';
import useWalk from "../../hooks/use-walk";

export default function Player({ skin }) {

  const { dir, step, walk } = useWalk(3);

  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    // change the evento from ArrawDown to down
    const dir = e.key.replace("Arrow", "").toLowerCase()

    walk(dir);
    // prevernt the user from scrolling when press up/down
    e.preventDefault();
  });

  return (
    <Actor
      sprite={`/sprites/skins/${skin}.png`}
      data={data}
      step={step}
      dir={dir}/>
  );
}
