import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import PasteForm from "../components/paste/pasteForm";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const existingPaste = allPastes.find((item) => item._id === pasteId);
      if (existingPaste) {
        setTitle(existingPaste.title);
        setContent(existingPaste.content);
      } else {
        // Paste not found, clear inputs and optionally notify user
        setTitle("");
        setContent("");
        toast.error("Paste not found");
        setSearchParams({}); // clear pasteId from URL
      }
    }
  }, [pasteId, allPastes]);

  function createOrUpdatePaste() {
    // Validate inputs
    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content cannot be empty");
      return; // Stop execution if validation fails
    }

    const paste = {
      title: title,
      content: content,
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
    setContent("");
    setSearchParams({});
  }

  return (
     <PasteForm
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      onSubmit={createOrUpdatePaste}
      isUpdating={!!pasteId}
    />
  );
};

export default Home;