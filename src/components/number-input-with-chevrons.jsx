"use client";

import React from "react";

import clsx from "clsx";
import "./number-input-with-chevrons.scss";

export default function NumberInputWithChevrons(props) {
  const { className, ...rest } = props;

  const Element = props.as || "div";

  const [_value, setValue] = React.useState(props.value || 0);

  const increase = () => {
    setValue((val) => val + 1);
  };

  const decrease = () => {
    setValue((val) => val - 1);
  };

  return (
    <Element className={clsx("numberInput_18_206", className)}>
      <input
        {...rest}
        className="input_18_207"
        onChange={(e) => setValue(Number(e.target.value))}
        value={_value}
        type="number"
      ></input>

      <div className="chevrons_1_26">
        <button className="up_1_28" onClick={increase}>
          <div className="lucideChevronUp_1_34">
            <svg
              viewBox="0 0 11 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="vector_1_38"
            >
              <path
                d="M9.5 5L5.5 1L1.5 5"
                stroke="black"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        <button className="down_1_29" onClick={decrease}>
          <div className="lucideChevronDown_1_30">
            <svg
              viewBox="0 0 11 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="vector_1_33"
            >
              <path
                d="M1.5 1L5.5 5L9.5 1"
                stroke="black"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </Element>
  );
}
