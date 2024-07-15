import React, { useState } from "react";

const AddVideoPopup = (props) => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState("");

  
  const handleChangeVideoTitle = (event) => {
    setVideoTitle(event.target.value);
  };
  const handleChangeVideoUrl = (event) => {
    setVideoUrl(event.target.value);
  };
  const handleChangeVideoDuration = (event) => {
    setVideoDuration(event.target.value);
  };

  
  const handleAddClick = () => {
    const videoData = {
      title: videoTitle,
      url: videoUrl,
      duration: videoDuration,
    };
  
    props.onAddVideo(videoData);
  
    togglePopup();
    
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className=" text-center">
      <button onClick={togglePopup} className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-3 mt-4 w-[100px] font-monteserrat text-darkgray">Add video</button>
      {isPopupVisible && (
        <div className="absolute bg-white  border-2 border-gray-400 top-[340px] left-72 w-[500px] h-[370px]">
          <div className="font-monteserrat text-xl mt-8">Add video</div>
          <input
            className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-6  text-sm font-monteserrat outline-none"
            type="text"
            value={videoTitle}
            onChange={handleChangeVideoTitle}
            placeholder="Title"
            required
          />
          <input
            className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-6  text-sm font-monteserrat outline-none"
            type="text"
            value={videoUrl}
            onChange={handleChangeVideoUrl}
            placeholder="Video URL"
            required
          />
          <input
            className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-6  text-sm font-monteserrat outline-none"
            type="text"
            value={videoDuration}
            onChange={handleChangeVideoDuration}
            placeholder="Duration"
            required
          />
          <div>
            <button
              onClick={handleAddClick}
              className="transform transition duration-300 hover:translate-y-2 pr-2 py-2 border shadow-shdB text-[14px] h-9 ml-3 mt-6 w-[100px] font-monteserrat text-darkgray"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVideoPopup;
