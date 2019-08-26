import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import pintwenty from "./pintwenty.png";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 80, width: 120 }}
      >
        <div className="Tilt-inner  pa0">
          <img alt="logo" src={pintwenty} />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
