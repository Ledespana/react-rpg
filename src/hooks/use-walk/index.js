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
        move(dir);
      }
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0)); // setps will go 0-1-2-0-1-2...
  }

  function move(dir) {
    setPosition((prev) =>  {
      return {
        x: prev.x + modifier[dir].x,
        y: prev.y + modifier[dir].y,
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
