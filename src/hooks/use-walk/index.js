import { useState } from "react";

export default function useWalk(maxSteps) {
  // 0 maps to dir down
  const [dir, setDir] = useState(0);
  // animation step
  const [step, setStep] = useState(0);

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
  };

  function walk(dir) {
    setDir(directions[dir]);
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0)); // setps will go 0-1-2-0-1-2...
  }

  return {
    walk,
    dir,
    step,
    directions
  }
}
