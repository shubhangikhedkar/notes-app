import React, { useRef, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Button = () => {
  const { btntext, togglevalue } = useContext(ThemeContext);
  const btn = useRef(null);

  // console.log("btn", btn.current);
  // console.log(theme);
  // console.log(togglevalue);
  // console.log(theme);
  // console.log(togglevalue.toString());
  return (
    <button
      type="button"
      className={`btn btn-outline-${btntext}`}
      onClick={togglevalue}
      ref={btn}
    >
      set to {btntext}
    </button>
  );
};

export default Button;
