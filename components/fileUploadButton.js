import React, { useRef } from "react";

const FileUploadButton = ({ onFileSelect, color, text }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (event) => {
    const selectedFiles = event.target.files;
    onFileSelect(selectedFiles);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="flex items-center justify-center transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[12px] h-9 ml-3 mt-4 w-[100px] font-monteserrat text-darkgray">
        {text}
        <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        multiple
      />
      </button>
    </div>
  );
};

export default FileUploadButton;
