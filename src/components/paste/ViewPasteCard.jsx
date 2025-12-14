import React from "react";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

const ViewPasteCard = ({ title, content, createdAt }) => {
  return (
    <div className="mt-6 flex justify-center px-4">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <div className="mb-4">
          <Input
            type="text"
            value={title}
            readOnly
            className="w-full text-lg font-semibold cursor-default"
          />
        </div>

        <div className="relative">
          {/* Content */}
          <TextArea
            value={content}
            readOnly
            rows={20}
            className="w-full resize-none cursor-default"
          />

          <span className="absolute bottom-4 right-4 text-sm text-gray-600 pointer-events-none">
            Created on {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewPasteCard;
