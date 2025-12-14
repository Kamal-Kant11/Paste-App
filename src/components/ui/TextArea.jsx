import React from "react";

function TextArea(props) {
  const { className, ...rest } = props;

  return (
    <textarea
      className={`p-3 bg-gray-700 rounded-2xl text-white outline-none border border-transparent focus:border-white transition-colors resize-none ${className ? className : ""}`}
      {...rest}  // pass other props like value, onChange, rows, placeholder, etc.
    />
  );
}

export default TextArea;
