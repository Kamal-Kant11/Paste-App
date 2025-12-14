import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Buttton";
import TextArea from "../ui/TextArea";

const PasteForm = ({
  title,
  setTitle,
  content,
  setContent,
  onSubmit,
  isEdit,
}) => {
  return (
    <div>
      <div className="mt-5 flex justify-center gap-7">
        <Input
          type="text"
          placeholder="Enter The Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[65%]"
        />

        <Button
          onClick={onSubmit}
          disabled={!title.trim() || !content.trim()}
        >
          {isEdit ? "Update My Paste" : "Create My Paste"}
        </Button>
      </div>

      <div>
        <TextArea
          placeholder="Enter The Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={20}
          className="mt-5 min-w-[500px]"
        />
      </div>
    </div>
  );
};

export default PasteForm;
