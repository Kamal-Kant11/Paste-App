import React from "react";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

const ViewPasteCard = ({ title, content }) => {
  return (
    <div>
      <div className="mt-5 flex justify-center">
        <Input
          type="text"
          value={title}
          readOnly
          className="min-w-[500px]"
        />
      </div>

      <div>
        <TextArea
          value={content}
          readOnly
          rows={20}
          className="mt-5 min-w-[500px]"
        />
      </div>
    </div>
  );
};

export default ViewPasteCard;
