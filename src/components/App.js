import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";

import Modal from "./Modal";
import Routes from "./Routes";
import Toggle from "./Toggle";
import ToggleWithKeyframes from "./ToggleWithKeyframes";
import ToggleWithTransition from "./ToggleWithTransition";
import Nav from "./Nav";
import Checkout from "./Checkout";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? "translate3d(0,0,0)" : "translate3d(-100%,100%,0)",
    opacity: isNavOpen ? "1" : "0"
  });

  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img
          src="http://placekitten.com/300/200"
          alt="kitten"
          className="logo"
        />
        <button className="menu-button" onClick={() => setNavOpen(!isNavOpen)}>
          Menu
        </button>
        <button
          className="menu-button"
          onClick={() => setCheckoutOpen(!isCheckoutOpen)}
        >
          Checkout
        </button>
        <Nav style={navAnimation} />
      </header>
      <main>
        {/* <Toggle /> */}
        {/* <ToggleWithKeyframes /> */}
        {/* <ToggleWithTransition /> */}
        <Checkout isOpen={isCheckoutOpen} />

        {/* <Routes /> */}
        <Modal />
      </main>
    </animated.div>
  );
};

export default App;
