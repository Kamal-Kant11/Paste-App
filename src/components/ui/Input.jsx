import React from "react";

function Input(props) {
  const { className, ...rest } = props;

  return (
    <input
      className={`
        h-12
        px-4
        rounded-2xl
        bg-blue-100/80
        text-gray-900
        placeholder:text-gray-600
        outline-none
        border border-blue-200/60
        shadow-inner
        focus:border-blue-600
        focus:ring-2 focus:ring-blue-400/60
        transition-all
        ${className ? className : ""}
      `}
      {...rest}
    />
  );
}

export default Input;
