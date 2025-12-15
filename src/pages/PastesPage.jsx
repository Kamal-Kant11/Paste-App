import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes, resetAllPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

import PasteSearch from "../components/paste/PasteSearch";
import Button from "../components/ui/Buttton";
import PasteCard from "../components/paste/PasteCard";

const PastesPage = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter pastes by search term
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete handler
  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  // Clear all pastes handler
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete ALL pastes?")) {
      dispatch(resetAllPastes());
      toast.success("All pastes cleared");
    }
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6">
      <div className="mt-5 flex justify-center gap-7 flex-wrap">
        {/* Search Bar */}
        <PasteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Clear All Pastes Button */}
        <Button onClick={handleClearAll}>Clear All</Button>
      </div>

<div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {filteredPastes.length === 0 ? (
          <div className="rounded-2xl border-2 border-dotted border-white bg-white/9 backdrop-blur mt-3 p-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl text-gray-300 font-bold tracking-wide">
              Your paste space is empty
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Create a paste to start saving, editing, and sharing your notes
              effortlessly.
            </p>
            <div className="text-sm font-semibold text-gray-400 italic select-none mt-2">
              No pastes available
            </div>
          </div>
        ) : (
          filteredPastes.map((paste) => (
            <PasteCard key={paste._id} paste={paste} onDelete={handleDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default PastesPage;
