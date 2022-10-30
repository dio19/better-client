import React from "react";
import { IInput } from "../../types";

import "./index.scss";

const Input = ({ label, type }: IInput) => {
  return (
    <div className="input">
      <input className="input-container" type={type} required />
      <span className="input-label">{label}</span>
    </div>
  );
};

export default Input;
