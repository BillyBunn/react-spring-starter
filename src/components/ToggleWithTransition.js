import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: "H",
      key: 1
    },
    {
      letter: "e",
      key: 2
    },
    {
      letter: "l",
      key: 3
    },
    {
      letter: "l",
      key: 4
    },
    {
      letter: "0",
      key: 5
    }
  ]);

  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 key={key} style={props}>
          {item.letter}
        </animated.h1>
      ))}
      <button
        onClick={() =>
          setItems([
            {
              letter: "H",
              key: 1
            }
          ])
        }
      >
        Toggle
      </button>
    </div>
  );
};

// const AnimatedTitle = animated.h1
// const AnimatedTitle = animated(ComponentName)

export default Toggle;

/*
const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  const transition = useTransition(isToggled, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <div style={{ position: "relative" }}>
      {transition.map(({ item, key, props }) =>
        item ? (
          <animated.h3 key={key} style={props}>
            Yo
            <br />
            Click "toggle" again to umount this one and mount a the other one
            again
          </animated.h3>
        ) : (
          <animated.h3 key={key} style={props}>
            Toggle w/ Transition - spring animation on mount/unmount.
            <br />
            Click "toggle" to umount this one and mount a different
            component/item
          </animated.h3>
        )
      )}
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};
*/
