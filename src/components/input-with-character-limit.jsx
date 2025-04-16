"use client";

import React from "react";

import clsx from "clsx";
import "./input-with-character-limit.scss";

export default function InputWithCharacterLimit(props) {
  const { maxCharacter = 50, className, ...rest } = props;

  const Element = props.as || "div";

  const value = props.value || "";

  const [_value, setValue] = React.useState(value);
  const characterCount = _value.length;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= +maxCharacter) {
      setValue(newValue);
      props.onChange?.(e);
    }
  };

  return (
    <Element className={clsx("inputWith_49_32", className)}>
      <input
        {...rest}
        className="input_49_29"
        onChange={handleChange}
        value={_value}
      ></input>

      <div className="inlineAddOn_49_30">
        <div className="_050_49_31">{`${characterCount}/${maxCharacter}`}</div>
      </div>
    </Element>
  );
}
