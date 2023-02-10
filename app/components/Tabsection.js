import React, { useEffect } from "react";
import { useState } from "react";
import MainContent from "./questionContent/mainContent";
import StudentDetails from "./Aside/studentDetails";
import QuestionStatus from "./Aside/QuestionStatus";
import QuestionPallet from "./Aside/QuestionPallet";

const Tabsection = () => {
  const [section, setSection] = useState([""]);
  const [qIndex, setqIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("allque");
  const [selectedOption, setSelectedOption] = useState("");
  const [userResponses, setUserResponses] = useState({});
  const [reviews, setReviews] = useState([]);
  const [dumps, setDumps] = useState([]);

  const buttonStyle =
    "btn btn-primary border border-white hover:border-black bg-blue-400 w-[150px] p-1 text-white font-medium rounded hover:bg-blue-600 uppercase ";

  const activeBtn =
    "btn btn-primary border border-black bg-blue-600 w-[150px] p-1 text-white font-medium rounded uppercase";

  const disabledBtn =
    "btn btn-primary border border-white bg-gray-400 w-[150px] p-1 text-white font-medium rounded uppercase cursor-not-allowed";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5400/allque/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const Data = await response.json();
        console.log("data" + Data);
        setSection(Data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log("sec" + section);

  const handleAllQue = (sec) => {
    if (sec === "phyque") {
      setActiveTab("phyque");
      setqIndex(0);
    } else if (sec === "chemque") {
      setqIndex(3);
      setActiveTab("chemque");
    } else if (sec === "mathsque") {
      setqIndex(6);
      setActiveTab("mathsque");
    } else {
      setqIndex(0);
      setActiveTab("allque");
    }
  };

  const handleResponse = (res) => {
    if (res === "next") {
      setqIndex(qIndex + 1);
    } else if (res === "prev") {
      setqIndex(qIndex - 1);
    }
  };
  //
  const handleReviewClick = () => {
    if (!selectedOption) {
      let updatedReviews = [...reviews];
      updatedReviews.push(qIndex);
      setReviews(updatedReviews);
    } else {
      let updatedResponses = { ...userResponses };
      updatedResponses[qIndex] = "review";
      setUserResponses(updatedResponses);
    }
  };

  console.log("reviews" + reviews);
  //
  const handleDumpClick = () => {
    let updatedDumps = [...dumps];
    updatedDumps.push(qIndex);
    setDumps(updatedDumps);
  };

  console.log("dumps :" + dumps);
  //

  const handleClearClick = () => {
    setSelectedOption("");
    let updatedResponses = { ...userResponses };
    updatedResponses[qIndex] = "";
    setUserResponses(updatedResponses);
  };
  console.log(selectedOption);
  console.log("userResponses : " + userResponses);

  // console.log(qIndex)

  return (
    <div>
      <aside className="h-[89%] absolute w-[25rem] flex flex-col pt-1 ml-[68rem] mt-[5px] pr-3">
        <StudentDetails/>
        {/* question pallet */}
        <QuestionPallet
          section={section}
          qIndex={qIndex}
          selectedOption={selectedOption}
          userResponses={userResponses}
          reviews={reviews}
          dumps={dumps}
        />
        {/* question pallet end */}
        <QuestionStatus
        userResponses={userResponses}
          reviews={reviews}
          dumps={dumps}
         />
      </aside>
      <div className="p-3 flex flex-row gap-3">
        <button
          type="button"
          onClick={() => handleAllQue("allque")}
          className={activeTab === "allque" ? `${activeBtn}` : `${buttonStyle}`}
        >
          ALL SECTIONS
        </button>
        <button
          type="button"
          onClick={() => handleAllQue("phyque")}
          className={activeTab === "phyque" ? `${activeBtn}` : `${buttonStyle}`}
        >
          PHYSICS
        </button>
        <button
          type="button"
          onClick={() => handleAllQue("chemque")}
          className={
            activeTab === "chemque" ? `${activeBtn}` : `${buttonStyle}`
          }
        >
          CHEMISTRY
        </button>
        <button
          type="button"
          onClick={() => handleAllQue("mathsque")}
          className={
            activeTab === "mathsque" ? `${activeBtn}` : `${buttonStyle}`
          }
        >
          MATHS
        </button>
      </div>
      <div className=" h-full">
        <MainContent
          section={section}
          qIndex={qIndex}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          userResponses={userResponses}
          setUserResponses={setUserResponses}
        />
      </div>
      <div>
        <div className="p-3 pb-11  flex flex-row gap-3">
          <button
            type="button"
            onClick={handleClearClick}
            className={`${buttonStyle} w-[200px]`}
          >
            clear Response
          </button>
          <button
            type="button"
            onClick={handleReviewClick}
            className={`${buttonStyle} w-[130px]`}
          >
            review
          </button>
          <button
            type="button"
            onClick={handleDumpClick}
            className={`${buttonStyle} w-[130px]`}
          >
            dump
          </button>
          <button
            type="button"
            onClick={qIndex > 0 ? () => handleResponse("prev") : null}
            // className={`${buttonStyle} w-[130px]`}
            className={
              qIndex <= 0
                ? `${disabledBtn} w-[130px]`
                : `${buttonStyle} w-[130px]`
            }
          >
            Previous
          </button>
          <button
            type="button"
            onClick={
              qIndex < section.length - 1 ? () => handleResponse("next") : null
            }
            className={
              qIndex >= section.length - 1
                ? `${disabledBtn} w-[130px]`
                : `${buttonStyle} w-[130px]`
            }
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabsection;
