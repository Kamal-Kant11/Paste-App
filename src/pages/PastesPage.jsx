import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes, resetAllPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

import PasteSearch from "../components/paste/PasteSearch";
import Button from "../components/ui/Buttton";
import PasteList from "../components/paste/PasteList";

const PastesPage = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter pastes by search term
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete handler passed down to PasteActions via PasteCard and PasteList
  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
    toast.success("Paste Deleted");
  };

  // Clear all pastes handler
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete ALL pastes?")) {
      dispatch(resetAllPastes());
      toast.success("All pastes cleared");
    }
  };

  return (
    <div>
      <div className="mt-5 flex justify-center gap-7">
        {/* Search Bar */}
        <PasteSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Clear All Pastes Button */}
        <Button onClick={handleClearAll}>Clear All Pastes</Button>
      </div>

      {/* List of Pastes */}
      <PasteList pastes={filteredPastes} onDelete={handleDelete} />
    </div>
  );
};

export default PastesPage;
