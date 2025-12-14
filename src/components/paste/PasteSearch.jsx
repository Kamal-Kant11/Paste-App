import React from "react";
import Input from "../ui/Input";

const PasteSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      type="search"
      placeholder="Search here..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-[65%]"
    />
  );
};

export default PasteSearch;
