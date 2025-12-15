import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../ui/Buttton";

import { FaEdit, FaEye, FaCopy, FaTrash, FaShareAlt } from "react-icons/fa";

const PasteActions = ({ paste, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  const sharePaste = () => {
    setIsOpen(false);
    if (navigator.share) {
      navigator
        .share({
          title: paste.title,
          text: paste.content,
          url: window.location.href,
        })
        .catch(() => toast.error("Share failed"));
    } else {
      toast.error("Share not supported on this browser");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("Copied to clipboard");
  };

  const handleDeleteClick = () => {
    setIsOpen(false);
    if (window.confirm(`Delete paste "${paste.title}"?`)) {
      onDelete(paste._id);
    }
  };

  const dropdownBtnBase =
    "block w-full text-left px-4 py-2 rounded cursor-pointer font-semibold transition-colors duration-200 text-white";

  return (
  <div className="flex flex-wrap justify-center items-center gap-3 min-w-[320px]">
    <Link to={`/?pasteId=${paste._id}`} className="w-full xs:w-auto">
      <Button className="w-full xs:w-auto text-base px-4 py-2 flex items-center gap-2 justify-center">
        <FaEdit /> Edit
      </Button>
    </Link>

    <Link to={`/pastes/${paste._id}`} className="w-full xs:w-auto">
      <Button className="w-full xs:w-auto text-base px-4 py-2 flex items-center gap-2 justify-center">
        <FaEye /> View
      </Button>
    </Link>

    <Button
      onClick={copyToClipboard}
      className="w-full xs:w-auto text-base px-4 py-2 flex items-center gap-2 justify-center"
    >
      <FaCopy /> Copy
    </Button>

    <div className="relative w-full xs:w-auto" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className="w-full xs:w-auto text-base px-4 py-2 flex items-center gap-2 justify-center"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        More Actions ▼
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-gray-700 rounded-md shadow-lg z-50">
          <button
            onClick={handleDeleteClick}
            className={`${dropdownBtnBase} hover:bg-red-600 flex items-center gap-2`}
          >
            <FaTrash /> Delete
          </button>
          <button
            onClick={sharePaste}
            className={`${dropdownBtnBase} hover:bg-green-600 flex items-center gap-2`}
          >
            <FaShareAlt /> Share
          </button>
        </div>
      )}
    </div>
  </div>
);

};

export default PasteActions;
