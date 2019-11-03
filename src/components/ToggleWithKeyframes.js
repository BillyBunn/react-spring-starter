import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  const { color, y } = useSpring({
    fontSize: isToggled ? "2rem" : "3em",
    color: isToggled ? "rebeccapurple" : "yellow",
    y: isToggled ? 1 : 0
  });

  return (
    <div>
      <animated.h3
        style={{
          transform: y
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, 25, 50, 100, 75]
            })
            .interpolate(y => `translate3d(0, ${y}px, 0)`),
          color
        }}
      >
        Toggle w/ Keyframes
      </animated.h3>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

// const AnimatedTitle = animated.h1
// const AnimatedTitle = animated(ComponentName)

export default Toggle;
