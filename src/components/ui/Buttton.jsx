import React from "react";

function Button(props) {
  const { children, onClick, disabled, className } = props;

  const baseClasses =
    "rounded-2xl bg-blue-400 text-white font-semibold cursor-pointer select-none transition-colors  duration-200";

  const enabledClasses = "hover:bg-blue-500 border active:bg-blue-600";

  const disabledClasses = "opacity-50 cursor-not-allowed bg-blue-300";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${
        disabled ? disabledClasses : enabledClasses
      } px-4 py-2 ${className || ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
