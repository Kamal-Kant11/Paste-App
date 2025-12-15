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

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete ALL pastes?")) {
      dispatch(resetAllPastes());
      toast.success("All pastes cleared");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-6 md:px-8 mt-6">
      {/* Search + Clear All */}
      <div className="flex flex-row xs:flex-col items-center px-1">
        {/* Search Bar */}
        <div className="w-full xs:w-auto sm:flex-1">
          <PasteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Clear All Button */}
        <Button
          onClick={handleClearAll}
          className="w-auto xs:w-full h-11 px-4 sm:px-6 ml-3 whitespace-nowrap mt-0 xs:mt-3"
        >
          Clear All
        </Button>
      </div>

      {/* Paste Cards */}
      <div className="grid gap-6 mt-8">
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
