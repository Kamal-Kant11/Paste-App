import React from "react";

const PasteForm = ({ title, setTitle, content, setContent, onSubmit, isUpdating }) => {
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
          onClick={onSubmit}
          disabled={!title.trim() || !content.trim()}
          className={`p-2 bg-gray-800 px-3 rounded-2xl border-white ${
            !title.trim() || !content.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isUpdating ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div>
        <textarea
          className="p-3 bg-gray-700 rounded-2xl mt-5 min-w-[500px]"
          value={content}
          placeholder="Enter The Content"
          onChange={(e) => setContent(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default PasteForm;
