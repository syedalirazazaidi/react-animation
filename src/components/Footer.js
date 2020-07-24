import React from "react";
import neth from "./images/nethead.svg";
import "./App.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download our App</h3>
            <p>Download App From Android and IOS mobile app</p>
          </div>
          <div className="footer-col-2">
            <img src={neth} alt="neth" width="40px" />
            <p>Download App From Android and IOS mobile app</p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Link</h3>
            <ul>
              <li>Services</li>
              <li>About us</li>
              <li>Home</li>
              <li>Join Us</li>
              <li>Blog Post</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>FaceBook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtub</li>
              <li>Linkdin</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright Right 2020 - Raza</p>
      </div>
    </div>
  );
};
