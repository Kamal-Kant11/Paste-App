import React from "react";
import PasteCard from "./pasteCard";
// import PasteCard from "./PasteCard";


const PasteList = ({ pastes, onDelete }) => {
  if (pastes.length === 0) {
    return <div className="text-center text-gray-400 mt-5">No pastes found.</div>;
  }

  return (
    <div className="flex flex-col gap-5 mt-5 w-full max-w-5xl mx-auto">
      {pastes.map((paste) => (
        <PasteCard key={paste._id} paste={paste} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PasteList;