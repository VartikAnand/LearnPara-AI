import React from "react";
import "./ShareBtn.css";
import { RiShareLine } from "react-icons/ri";
const ShareBtn = () => {
  return (
    <button className="ShareBtnbutton">
      <span>
        <RiShareLine />
      </span>
    </button>
  );
};

export default ShareBtn;
