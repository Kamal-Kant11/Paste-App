import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes, resetAllPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sharePaste = (paste) => {
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

  return (
    <div>
      <div className="mt-5 flex justify-center gap-7">
        <input
          className="pl-3 bg-gray-700 rounded-2xl w-[65%]"
          type="search"
          placeholder="Search here.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          type="button"
          className="p-2 bg-gray-800 px-3 rounded-2xl border-white"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete ALL pastes?")) {
              dispatch(resetAllPastes());
              toast.success("All pastes cleared");
            }
          }}
        >
          Clear All Pastes
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-5 w-130">
        {filteredData.length === 0 ? (
          <div className="text-center text-gray-400">No pastes found.</div>
        ) : (
          filteredData.map((paste) => {
            return (
              <div
                className="border flex flex-col gap-1.5 items-center"
                key={paste._id}
              >
                <div>{paste.title}</div>
                <div className="text-wrap">{paste.content}</div>
                <div className="flex flex-row gap-6 place-content-evenly">
                  <button>
                    <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                  </button>
                  <button>
                    <Link to={`/pastes/${paste._id}`}>View</Link>
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are you sure you want to delete paste "${paste.title}"?`
                        )
                      ) {
                        dispatch(removeFromPastes(paste._id));
                      }
                    }}
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button type="button" onClick={() => sharePaste(paste)}>
                    Share
                  </button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Paste; 