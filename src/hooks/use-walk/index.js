import { useState } from "react";

export default function useWalk(maxSteps) {
  const [position, setPosition] = useState({x: 0, y: 0});
  // 0 maps to dir down
  const [dir, setDir] = useState(0);
  // animation step
  const [step, setStep] = useState(0);

  const stepSize = 16;

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
  };

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize }
  }

  function walk(dir) {
    setDir(prev => {
      if (directions[dir] === prev) {
        // if the direction is the same , then we move, otherwise we would be turning
        console.dir(position);
        move(dir);
      }
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0)); // setps will go 0-1-2-0-1-2...
  }

  function move(dir) {
    setPosition((prev) =>  {

      const limitX = 960
      const limitY = 656

      let newX, newY;
      // here we stop the character when reaching the limits.
      // this may change if we change maps when moving to the limit

      if (prev.x === 0 && modifier[dir].x <= 0 ) {
        // if we reach the left limit
        newX = 0;
      } else if (prev.x === limitX && modifier[dir].x >= 0) {
        newX = limitX;
      } else {
        newX = prev.x + modifier[dir].x;
      }

      if (prev.y === 0 && modifier[dir].y <= 0 ) {
        // if we reach the top limit
        newY = 0;
      } else if (prev.y === limitY && modifier[dir].y >= 0) {
        newY = limitY;
      } else {
        newY = prev.y + modifier[dir].y;
      }

      return {
        x: newX,
        y: newY,
      }
    });
  }

  return {
    walk,
    dir,
    step,
    position
  }
}
