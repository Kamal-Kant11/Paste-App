import React from "react";

function Input(props) {
  const { className, ...rest } = props;

  return (
    <input
      className={`pl-3 bg-gray-700 rounded-2xl text-white outline-none border border-transparent focus:border-white transition-colors ${className ? className : ""}`}
      {...rest}  // pass all other props like type, value, onChange, placeholder, etc.
    />
  );
}

export default Input;
