import React, { useEffect } from "react";
import "./App.css";
import alpa from "./images/a.jpg";
import beta from "./images/b.jpg";
import gamma from "./images/c.jpg";
export const Feathure = () => {
  return (
    <div className="catagories">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <img src={alpa} alt="al" />
          </div>
          <div className="col-3">
            <img src={beta} alt="ba" />
          </div>
          <div className="col-3">
            <img src={gamma} alt="ga" />
          </div>
        </div>
      </div>
    </div>
  );
};
