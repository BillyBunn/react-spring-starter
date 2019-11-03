import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    fontSize: isToggled ? "2rem" : "3em",
    // transform: isToggled
    //   ? "skew(-0.1turn) translate3d(0, 0, 0)"
    //   : "skew(0turn) translate3d(0, 100px, 0)",
    color: isToggled ? "tomato" : "yellow",
    y: isToggled ? 0 : -50
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
          color
        }}
      >
        Toggle Thingy
      </animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

// const AnimatedTitle = animated.h1
// const AnimatedTitle = animated(ComponentName)

export default Toggle;
