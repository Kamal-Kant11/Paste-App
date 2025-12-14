import React, { useRef, useEffect } from "react";

function TextArea(props) {
  const { className, ...rest } = props;
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [rest.value]);

  return (
    <textarea
      ref={ref}
      className={`
    p-4
    rounded-2xl
    bg-blue-100/70
    text-gray-900
    placeholder:text-gray-600
    outline-none
    border border-blue-200/60
    shadow-inner
    focus:border-blue-500
    focus:ring-2 focus:ring-blue-400/40
    transition-all
    resize-none
    overflow-hidden
    min-h-[220px]
    sm:min-h-[260px]
    ${className || ""}
  `}
      {...rest}
    />
  );
}

export default TextArea;
