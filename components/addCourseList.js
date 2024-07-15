import React from "react";

const AddCourseList= ({ category,title }) => {
  let src = "";
  

  if (category === "certificate") {
    src = "./assets/graduationHat.svg";
    title="certificate"
  }
  if (category === "video") {
    src = "./assets/playButton.svg";
    
    
  }
  if (category === "quiz") {
    src = "./assets/radio.svg";
    
    title="quiz"
  }

  return (
    <div className="flex items-center ">
      
      <div className="mr-7">
        <img src={src} alt="" className="" />
      </div>
      <div className="mr-7 w-60 flex text-black text-lg font-normal font-montserrat">
        <div>01.</div>
        <div className="  text-black text-lg font-normal font-montserrat">{title}</div>
      </div>
      
      <div className="mr-4">2min</div>
    </div>
  );
};

export default AddCourseList;
