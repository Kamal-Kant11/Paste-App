import React from "react";
import PasteActions from "./PasteActions";

const PasteCard = ({ paste, onDelete }) => {
  return (
    <div className="border rounded p-4 bg-gray-700 text-white flex flex-col gap-3 max-w-full break-words">
      <div className="font-semibold text-lg">{paste.title}</div>
      <div className="whitespace-pre-wrap">{paste.content}</div>
      <PasteActions paste={paste} onDelete={onDelete} />
      <div className="text-sm text-gray-400">{paste.createdAt}</div>
    </div>
  );
};

export default PasteCard;
