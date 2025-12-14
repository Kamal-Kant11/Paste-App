import React from "react";

function Button(props) {
  const { children, onClick, disabled, className } = props;

  // Basic styling classes
  const baseClasses = "p-2 rounded-2xl border border-white bg-gray-800 text-white cursor-pointer";

  // If disabled, apply some styles
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
