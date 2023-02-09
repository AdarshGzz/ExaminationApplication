import React, { useEffect } from "react";
import { useState } from "react";
import MainContent from "./questionContent/mainContent";
import StudentDetails from "./Aside/studentDetails";
import QuestionStatus from "./Aside/QuestionStatus";

const Tabsection = () => {
  const [section, setSection] = useState("allque");
  const [value, setvalue] = useState("allque");
  const [qIndex, setqIndex] = useState(0);
  const [response,setResponse] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const[answered,setAnswered] = useState(null)
  const[notAnswered, setNotAnswered] = useState(null)
  const[dump,setDump] = useState(null)
  const[reviewAns,setReviewAns] = useState(null)
  const[reviewNotAns,setReviewNotAns] = useState(null)


  const buttonStyle =
    "btn btn-primary border border-white hover:border-black bg-blue-400 w-[150px] p-1 text-white font-medium rounded hover:bg-blue-600 uppercase ";

  const colStyle = "text-black font-bold border cursor-pointer border-black";

  const greenColStyle =
    "text-black font-bold border cursor-pointer  bg-green-400  border-black";
  const redColStyle =
    "text-black font-bold border cursor-pointer  bg-red-400  border-black";
  const purpleColStyle =
    "text-black font-bold border cursor-pointer  bg-purple-400  border-black";
  const yellowColStyle =
    "text-black font-bold border cursor-pointer  bg-yellow-400  border-black";
  const grayColStyle =
    "text-black font-bold border cursor-pointer  bg-gray-400  border-black";

  const activeBtn =
    "btn btn-primary border border-black bg-blue-600 w-[150px] p-1 text-white font-medium rounded uppercase";

  const disabledBtn =
    "btn btn-primary border border-white bg-gray-400 w-[150px] p-1 text-white font-medium rounded uppercase cursor-not-allowed";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5400/${value}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const Data = await response.json();
        setSection(Data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [value]);

  const handleAllQue = (sec) => {
    setvalue(sec);
    setqIndex(0)
  };

  const handleResponse =(res)=>{
    if(res==='next'){
      setqIndex(qIndex+1)
    }
    else if(res==='prev'){
      setqIndex(qIndex-1);
    }
    else if(res==='dump'){
      setSelectedOption(null)
      setqIndex(qIndex+1)
    }
    setResponse(res)
  }
  console.log(response)
  
  
  const handleColClick = (col) =>{
    setqIndex(col)
    // console.log(col)
  }
  
  const handleClearResponse=()=>{
    setSelectedOption(null)
  }
  console.log(selectedOption)
 
  // console.log(qIndex)

  

  return (
    <div>
      <aside className="h-[89%] absolute w-[25rem] flex flex-col pt-1 ml-[68rem] mt-[5px] pr-3">
        <StudentDetails />
        {/* question pallet */}
        <div className=" bg-slate-50 relative flex flex-col overflow-hidden h-[15rem] rounded-md  border-2 mt-1 border-black w-[90%]">
          <div className="h-7 w-full pl-1 uppercase font-bold bg-blue-400">
            <p>Question pallet</p>
          </div>
          <div className="container text-center ">
            <div className=" grid-container grid p-1 grid-cols-4">
              {Object.entries(section).map(([index, currentSection]) => (
                <div
                  className={`${colStyle}`}
                  onClick={() => handleColClick(index)}
                  key={index}
                >
                  {currentSection.queNo}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* question pallet end */}
        <QuestionStatus />
      </aside>
      <div className="p-3 flex flex-row gap-3">
        <button
          type="button"
          onClick={() => handleAllQue("allque")}
          className={value === "allque" ? `${activeBtn}` : `${buttonStyle}`}
        >
          ALL SECTIONS
        </button>
        <button
          type="button"
          onClick={() => handleAllQue("phyque")}
          className={value === "phyque" ? `${activeBtn}` : `${buttonStyle}`}
        >
          PHYSICS
        </button>
        <button
          type="button"
          onClick={() => handleAllQue("chemque")}
          className={value === "chemque" ? `${activeBtn}` : `${buttonStyle}`}
        >
          CHEMISTRY
        </button>
        <button
          type="button"
          onClick={() => handleAllQue("mathsque")}
          className={value === "mathsque" ? `${activeBtn}` : `${buttonStyle}`}
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
          response={response}
        />
      </div>
      <div>
        <div className="p-3 flex flex-row gap-3">
          <button
            type="button"
            onClick={handleClearResponse}
            className={`${buttonStyle} w-[200px]`}
          >
            clear Response
          </button>
          <button
            type="button"
            onClick={() => handleResponse("rewiew")}
            className={`${buttonStyle} w-[130px]`}
          >
            review
          </button>
          <button
            type="button"
            onClick={() => handleResponse("dump")}
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
            // className={`${buttonStyle} w-[130px]`}
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
