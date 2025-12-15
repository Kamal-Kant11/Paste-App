import React from "react";
import PasteActions from "./PasteActions";

const PasteCard = ({ paste, onDelete }) => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 rounded-xl p-4 sm:p-5
                text-white shadow-lg flex flex-col gap-4 sm:gap-5">

      {/* Title */}
      <h2 className="text-lg sm:text-2xl font-semibold tracking-wide truncate">
        {paste.title}
      </h2>

      {/* Content preview */}
      <pre className="whitespace-pre-wrap text-gray-300 font-sans leading-relaxed
                      overflow-hidden line-clamp-4 max-w-full break-words">
        {paste.content}
      </pre>

      {/* Action buttons */}
      <PasteActions paste={paste} onDelete={onDelete} />

      {/* Date */}
      <div className="text-xs sm:text-sm text-gray-400 self-end mt-2 italic select-none">
        {paste.createdAt}
      </div>
    </div>
  );
};

export default PasteCard;
