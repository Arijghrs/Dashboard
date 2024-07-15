import React, { useState } from "react";

const DragAndDrop = () => {
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
    <div className=" ">
      <div
        className={`file-input ${
          dragging ? "dragging" : ""
        } bg-gray-100 w-[320px] h-60 flex items-center justify-center`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="absolute  ">
          <div>
            <img className=" ml-[93px]" src="./assets/imageInput.svg" alt="Image Input" />
          </div>
          <div className="text-sm text-gray-500 ">
            Drag and drop a file here or click to select
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
