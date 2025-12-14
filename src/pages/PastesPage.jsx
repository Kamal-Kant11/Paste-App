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

      <div className="grid gap-6 mt-8">
        {filteredPastes.map((paste) => (
          <PasteCard key={paste._id} paste={paste} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default PastesPage;
