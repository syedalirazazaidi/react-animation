import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "./images/img2.svg";
import image2 from "./images/img4.svg";
import image3 from "./images/img5.svg";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

import useWebAnimations, { fadeInUp } from "@wellyshen/use-web-animations";
export const Card = () => {
  const { keyframes, timing } = fadeInUp;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 3000,
      duration: 4000,
    },
  });

  return (
    <div className="row" ref={ref}>
      <div className="column">
        <div className="card">
          <img
            src={image1}
            alt="ima"
            width="150px"
            height="auto"
            padding-top="10px"
          />
          <h1>Marketing</h1>
          <p className="title">CEO & Founder</p>
          <p>Oxford University</p>
          <Link to="#">{/* <i className="fa fa-instagram"></i> */}</Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img
            src={image1}
            alt="ima"
            width="150px"
            height="auto"
            padding-top="10px"
          />
          <h1>Marketing</h1>
          <p className="title">CEO & Founder</p>
          <p>Oxford University</p>
          <Link to="#">{/* <i className="fa fa-instagram"></i> */}</Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img
            src={image2}
            alt="ima"
            width="150px"
            height="auto"
            padding-top="10px"
          />
          <h1>Marketing</h1>
          <p className="title">CEO & Founder</p>
          <p>Oxford University</p>
          <Link to="#">{/* <i className="fa fa-instagram"></i> */}</Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img
            src={image3}
            alt="ima"
            width="123px"
            height="auto"
            padding-top="10px"
          />
          <h1>Marketing</h1>
          <p className="title">CEO & Founder</p>
          <p>Oxford University</p>
          <Link to="#">{/* <i className="fa fa-instagram"></i> */}</Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="#">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
};
