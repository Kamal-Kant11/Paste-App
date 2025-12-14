import React from "react";
import PasteCard from "./PasteCard";

const PasteList = ({ pastes, onDelete }) => {
  if (pastes.length === 0)
    return (
      <div className="text-center mt-8 text-gray-400">No pastes found.</div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {pastes.map((paste) => (
        <PasteCard key={paste._id} paste={paste} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PasteList;
