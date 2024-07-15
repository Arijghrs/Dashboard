import CustomInputButton from "../components/customInputButton";
import DragAndDrop from "../components/dragAndDrop";
import FileUploadButton from "../components/fileUploadButton";
import AddCourseList from "../components/addCourseList";
import { useState, useEffect } from "react";
import axios from "axios";
import AddVideoPopup from "../components/addVideoPopup";
import AddQuizPopup from "../components/addQuizPopup"; // Corrected import path and casing
import AddCertificatePopup from "../components/addCertificatePopup";

const AddCourses = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [price, setPrice] = useState("");
  const [skills, setSkills] = useState("");
  const [selectedMentor, setSelectedMentor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState("");
  const [certification, setCertification] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [quizType, setQuizType] = useState("");

  const [quizQuestion, setQuizQuestion] = useState("");
  const [quizAnswers, setQuizAnswers] = useState([]);

  const handleChangeMentor = (event) => {
    setSelectedMentor(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setCourseTitle(event.target.value);
  };
  const handleChangeExperience = (event) => {
    setExperienceLevel(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeSkill = (event) => {
    setSkills(event.target.value);
  };
  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleAddVideo = (videoData) => {
    setVideoTitle(videoData.title);
    setVideoDuration(videoData.duration);
    setVideoUrl(videoData.url);
  };
  const handleAddQuiz = (quizData) => {
    setQuizTitle(quizData.title);
    setQuizDescription(quizData.description);
    setQuizQuestion(quizData.question);
    setQuizAnswers(quizData.answers);
    setQuizType(quizData.questionType);
  };
  const handleAddCertification = (certificationData) => {
    setCertification(certificationData.Certification);
  };

  const handleFileSelect = (files) => {
    if (files) {
      console.log("Selected files:", files);
    }
  };

  const submit = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/v1/course`, {
        title: courseTitle,
        instructor: selectedMentor,
        experience_level: experienceLevel,
        category: selectedCategory,
        price: price,
        description: description,
        time: duration,
        skills: skills,
        videos: [
          {
            title: videoTitle,
            time: videoDuration,
            url: videoUrl,
          },
        ],
        quizzes: [
          {
            title: quizTitle,
            description: quizDescription,
            questionType: quizType,
            question: quizQuestion,
            answers: {
              option1: quizAnswers[0],
              option2: quizAnswers[1],
              option3: quizAnswers[2],
              option4: quizAnswers[3],
            },
          },
        ],
        certificates: certification,
      });
      console.log("response::::", response.data.msg);
      if (
        response.data.msg ==
        "Register Success! Please activate your email to start."
      ) {
        toggelmodal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex bg-neutral-50 ml-5 w-[1100px]">
      <div className="ml-20 mt-8 ">
        <div className="flex">
          <div className="text-3xl text-gray-700 font-montserrat font-normal mr-2">
            Add course
          </div>
          <button className="text-base text-violet-400 mt-2 font-montserrat font-normal">
            Cancel
          </button>
        </div>
        <div className=" mt-4 flex gap-24 w-[850px] h-[570px] bg-white">
          <div className="pt-6 ">
            <div className="text-black text-2xl font-montserrat font-normal ml-4">
              Add info about the new course
            </div>
            <div className="mt-4 ml-8">
              <input
                className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4  text-sm font-monteserrat outline-none"
                type="text"
                value={courseTitle}
                onChange={handleChangeTitle}
                placeholder="Course title"
              />

              <select
                value={selectedMentor}
                onChange={handleChangeMentor}
                className="border text-gray-500 broder-1 border-gray-400 shadow-shdInsetPurp  mt-4  px-2  text-sm font-monteserrat leading-tight w-[320px] h-11  text-opacity-50 font-montserrat font-normal outline-none "
              >
                <option value="">Mentor</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <select
                value={selectedCategory}
                onChange={handleChangeCategory}
                className="border text-gray-500 broder-1 border-gray-400 shadow-shdInsetPurp  mt-4  px-2  text-sm font-monteserrat leading-tight w-[320px] h-11  text-opacity-50 font-montserrat font-normal outline-none "
              >
                <option value="">Category</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <div>
                <input
                  className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4 mb-4  text-sm font-monteserrat outline-none"
                  type="text"
                  value={experienceLevel}
                  onChange={handleChangeExperience}
                  placeholder="Experience level"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  cols={33}
                  placeholder="Description"
                  value={description}
                  onChange={handleChangeDescription}
                  className=" resize-none w-[320px] p-3 text-neutral-900 text-opacity-50 border-gray-400 shadow-shdInsetPurp text-sm font-montserrat font-normal h-44 mb-8 grid-rows-6 row-span-full outline-none border   "
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <DragAndDrop />
            <CustomInputButton />

            <button className="flex items-center  justify-between transform border broder-1 p-3  h-11 border-gray-400  w-[320px] mt-4   text-sm  outline-none  py-2 pr-2  shadow-shdInsetPurp text-[10px]  font-monteserrat">
              <input
                className=" outline-none text-sm "
                placeholder="Price"
                value={price}
                onChange={handleChangePrice}
              ></input>

              <h1 className="text-sm">TND</h1>
            </button>

            <input
              className="border broder-1 p-3 border-gray-400 shadow-shdInsetPurp h-11 w-[320px] mt-4   text-sm font-monteserrat outline-none"
              type="text"
              value={skills}
              onChange={handleChangeSkill}
              placeholder="Skills you will learn"
            />
            <div className="flex items-center  justify-between transform border broder-1 p-3  h-11 border-gray-400  w-[320px] mt-4   text-sm  outline-none  py-2 pr-2  shadow-shdInsetPurp text-[10px]  font-monteserrat">
              <input
                className=" outline-none text-sm "
                placeholder="Duration"
                value={duration}
                onChange={handleChangeDuration}
              ></input>

              <h1 className="text-sm">Minutes</h1>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-xl font-montserrat ml-4 text-gray-900">
            Add course elements
          </div>
          <div>
            <div className="flex gap-2">
              <AddVideoPopup onAddVideo={handleAddVideo} />
              <AddQuizPopup onAddQuiz={handleAddQuiz} />
              <AddCertificatePopup
                onAddCertification={handleAddCertification}
              />

              <button onClick={submit}>submit</button>
            </div>
            <div className="mt-10 mb-8">
              <AddCourseList category="video" title="Introduction" />
              <AddCourseList category="video" title="Chapter 1: Lorem ipsum" />
              <AddCourseList category="quiz" />
              <AddCourseList category="video" title="Chapter 2: Lorem ipsum" />
              <AddCourseList category="certificate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCourses;
