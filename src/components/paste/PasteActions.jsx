import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Button from "../ui/Buttton";
// import Button from "../ui/Button";

const PasteActions = ({ paste, onDelete }) => {
    
  const sharePaste = () => {
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
    if (window.confirm(`Delete paste "${paste.title}"?`)) {
      onDelete(paste._id);
    }
  };

  return (
    <div className="flex flex-row gap-6 justify-center mt-2">
      {/* Edit button wrapped inside Link */}
      <Link to={`/?pasteId=${paste._id}`}>
        <Button className="underline text-blue-300 p-0 bg-transparent border-0 cursor-pointer">
          Edit
        </Button>
      </Link>

      {/* View button wrapped inside Link */}
      <Link to={`/pastes/${paste._id}`}>
        <Button className="underline text-blue-300 p-0 bg-transparent border-0 cursor-pointer">
          View
        </Button>
      </Link>

      {/* Delete button */}
      <Button
        className="underline text-red-400 p-0 bg-transparent border-0 cursor-pointer"
        onClick={handleDeleteClick}
      >
        Delete
      </Button>

      {/* Copy button */}
      <Button
        className="underline p-0 bg-transparent border-0 cursor-pointer"
        onClick={copyToClipboard}
      >
        Copy
      </Button>

      {/* Share button */}
      <Button
        className="underline p-0 bg-transparent border-0 cursor-pointer"
        onClick={sharePaste}
      >
        Share
      </Button>
    </div>
  );
};

export default PasteActions;
