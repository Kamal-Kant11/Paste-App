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
      <div className="flex flex-row xs:flex-col items-center px-1 gap-7 xs:gap-2">
  <Input
    type="text"
    placeholder="Enter The Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-full xs:w-auto sm:flex-1 h-11"
  />

  <Button
    onClick={onSubmit}
    disabled={!title.trim() || !content.trim()}
    className="w-auto xs:w-full h-11 px-4 sm:px-6 whitespace-nowrap mt-0 xs:mt-3"
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
