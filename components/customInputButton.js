import React, { useState } from "react";

const CustomInputButton = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Do something with the selected files
    console.log(files);
  };

  return (
    <div
      className={`file-input ${
        dragging ? "dragging" : ""
      } flex justify-between w-[320px] h-11 my-4 border shadow-shdInsetPurp text-sm  border-gray-400`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="absolute w-[320px] flex justify-between h-11 items-center pb-1 px-1">
        <div className="text-neutral-900 text-opacity-50 p-3 font-normal text-sm ">Upload Document</div>
        <img src="./assets/documentUpload.svg" alt="Document Upload" />
      </div>
    </div>
  );
};

export default CustomInputButton;
