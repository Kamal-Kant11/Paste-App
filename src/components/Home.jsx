import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
        title: title,
        content: value,
        _id: pasteId || Date.now().toString(36),
        createdAt: new Date().toISOString()
    }
    if(pasteId) {
        // updating existing one
        dispatch(updateToPastes(paste));
    } else {
        // Adding new one
        dispatch(addToPastes(paste))
    }

    // after creation or updation emptying the inputs
    setTitle("")
    setValue("")
    setSearchParams({})
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
        className="p-2 bg-gray-800 px-3 rounded-2xl hover:border-1 border-white ">
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
