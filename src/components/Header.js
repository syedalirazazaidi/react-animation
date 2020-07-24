import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import inter from "./images/net.jpg";
import { Link } from "react-router-dom";
import elemt from "./images/element.png";
import menu from "./images/menu.png";

import useWebAnimations from "@wellyshen/use-web-animations";

export const Header = () => {
  const { ref } = useWebAnimations({
    keyframes: {
      transform: ["translateX(20px)"],
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity,
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  // const element = useRef(null);
  const { element } = useWebAnimations({
    keyframes: {
      transform: ["translate(0px,0px)"],
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity,
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  const [nav, setnav] = useState(false);
  const menutoggle = () => {
    setnav(!nav);
  };
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={inter} alt="inter" width="70px" />
          </div>
          <nav>
            {/* className={nav ? "menu-icon" : null} */}
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Product</Link>
              </li>
              <li>
                <Link to="#">About US</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* <img src={nethead} alt="net" width="33px" height="33px" /> */}
          <img
            src={menu}
            alt="menu"
            className="menu-icon"
            onClick={menutoggle}
          />
        </div>
        <div className="row">
          <div className="col-2">
            <h1 className="type">
              Give your work <br />
              in New Style!
            </h1>
            <p className="typewriter">
              The Internet of things is a system of interrelated computing
              identifiers mechanical and digital machines provided with unique
            </p>
            <Link to="#" className="btnn">
              Explore More &#8594;
            </Link>
          </div>
          <div className="col-2" ref={ref}>
            <img src={elemt} alt="elem" />
          </div>
        </div>
      </div>
    </div>
  );
};
