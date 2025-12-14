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
    <div className="max-w-4xl mx-auto px- sm:px-6 md:px-8 mt-6">
      <div className="flex items-center px-1 gap-7 sm:gap-4">
        <Input
          type="text"
          placeholder="Enter The Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 h-11"
        />

        <Button
          onClick={onSubmit}
          disabled={!title.trim() || !content.trim()}
          className="h-11 px-4 sm:px-6 whitespace-nowrap"
        >
          {isEdit ? "Update" : "Create"}
        </Button>
      </div>

      <div className="mt-7">
        <TextArea
          placeholder="Enter The Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={14}
          className="w-full min-h-[450px] md:min-h-[450px]"
        />
      </div>
    </div>
  );
};

export default PasteForm;
