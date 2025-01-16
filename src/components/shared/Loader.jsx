import React from "react";
import logo from "../../assets/logo.png";
import "../../styles/SUMUN/loader.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading_div">
        <img
          src={logo}
          width="30"
          height="30"
          className="loading_img"
          alt="SITMUN logo"
        />
        <img
          src={logo}
          width="30"
          height="30"
          className="loading_img"
          alt="SITMUN logo"
        />
        <img
          src={logo}
          width="30"
          height="30"
          className="loading_img"
          alt="SITMUN logo"
        />
      </div>
    </div>
  );
};

export default Loading;