import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../ui/Buttton";

import {
  FaEdit,
  FaEye,
  FaCopy,
  FaTrash,
  FaShareAlt,
  FaEllipsisV,
} from "react-icons/fa";

const useWindowWidth = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const PasteActions = ({ paste, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const width = useWindowWidth();
  const isSmallScreen = width < 600;

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

  // Common button style
  const btnBaseClasses =
    "text-base flex items-center gap-2  px-4 py-2 transition-colors duration-200";

  // On small screen, buttons only icon + centered, no text
  const getBtnClasses = () =>
    isSmallScreen
      ? "w-13 h-13 bg-gray-600 hover:bg-blue-400 justify-center px-0 py-3" // bigger width, height and vertical padding
      : "px-4 py-2 justify-start";

  return (
    <div
      className="
      flex gap-4 justify-center flex-wrap max-w-full
      xs:grid xs:grid-cols-2 xs:gap-3
    "
    >
      {/* Edit */}
      <Link to={`/?pasteId=${paste._id}`}>
        <Button title="Edit" className={`${btnBaseClasses} ${getBtnClasses()}`}>
          <FaEdit />
          {!isSmallScreen && "Edit"}
        </Button>
      </Link>

      {/* View */}
      <Link to={`/pastes/${paste._id}`}>
        <Button title="View" className={`${btnBaseClasses} ${getBtnClasses()}`}>
          <FaEye />
          {!isSmallScreen && "View"}
        </Button>
      </Link>

      {/* Copy */}
      <Button
        onClick={copyToClipboard}
        title="Copy"
        className={`${btnBaseClasses} ${getBtnClasses()}`}
      >
        <FaCopy />
        {!isSmallScreen && "Copy"}
      </Button>

      {/* 🔽 SMALL SCREEN: Delete & Share directly */}
      {isSmallScreen && (
        <>
          <Button
            onClick={handleDeleteClick}
            title="Delete"
            className={`${btnBaseClasses} ${getBtnClasses()} bg-red-500 hover:bg-red-600`}
          >
            <FaTrash />
          </Button>

          <Button
            onClick={sharePaste}
            title="Share"
            className={`${btnBaseClasses} ${getBtnClasses()} bg-green-500 hover:bg-green-600`}
          >
            <FaShareAlt />
          </Button>
        </>
      )}

      {/* 🔼 BIG SCREEN: More dropdown */}
      {!isSmallScreen && (
        <div className="relative" ref={dropdownRef}>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            title="More actions"
            aria-haspopup="true"
            aria-expanded={isOpen}
            className={`${btnBaseClasses} ${getBtnClasses()}`}
          >
            <FaEllipsisV /> More ▼
          </Button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-gray-700 rounded-md shadow-lg z-50">
              <button
                onClick={handleDeleteClick}
                className="w-full px-4 py-2 text-left flex items-center gap-2 text-white hover:bg-red-600"
              >
                <FaTrash /> Delete
              </button>
              <button
                onClick={sharePaste}
                className="w-full px-4 py-2 text-left flex items-center gap-2 text-white hover:bg-green-600"
              >
                <FaShareAlt /> Share
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PasteActions;
