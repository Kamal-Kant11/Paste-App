import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const existingPaste = allPastes.find((item) => item._id === pasteId);
      if (existingPaste) {
        setTitle(existingPaste.title);
        setValue(existingPaste.content);
      } else {
        // Paste not found, clear inputs and optionally notify user
        setTitle("");
        setValue("");
        toast.error("Paste not found");
        setSearchParams({}); // clear pasteId from URL
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    // Validate inputs
    if (!title.trim() || !value.trim()) {
      toast.error("Title and Content cannot be empty");
      return; // Stop execution if validation fails
    }

    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toDateString(),
    };

    if (pasteId) {
      // updating existing paste
      dispatch(updateToPastes(paste));
    } else {
      // adding new paste
      dispatch(addToPastes(paste));
    }

    // Clear inputs and URL params after create/update
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="mt-5 flex justify-center gap-7">
        <input
          className="pl-3 bg-gray-700 rounded-2xl w-[65%]"
          type="text"
          placeholder="Enter The Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          disabled={!title.trim() || !value.trim()}
          className={`p-2 bg-gray-800 px-3 rounded-2xl border-white ${
            !title.trim() || !value.trim()
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="p-3 bg-gray-700 rounded-2xl mt-5 min-w-[500px]"
          value={value}
          placeholder="Enter The Content"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
