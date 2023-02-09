import React from 'react'
import QuestionDiscription from './questionDiscription';
import { useState } from "react";



const mainContent = ({section,qIndex,selectedOption, setSelectedOption,response}) => {

  let optionArray = section[qIndex].options;
  let options = [];
  for (let option in optionArray) {
    options.push(optionArray[option]);
  }

  // 
  const currentQue = section[qIndex].queNo

  const selectedData = {
    queNo: section[qIndex].queNo,
    selection: selectedOption
  };
  const selectedDataArray = [];
     selectedDataArray[currentQue] = selectedData; 
     console.log(selectedDataArray)

   const handleSelectedOption = (e) => {
    setSelectedOption(e.target.value);
   };
  // // 
  

  return (
    <div className="w-[74%] h-full pl-4 ">
      <div>
        {/* question heading */}
        <nav className="bg-blue-400 h-8 rounded-md rounded-b-none box-border border border-black">
          <div className=" flex flex-row justify-between ">
            <p className="navbar-brand text-sm text-white font-bold flex justify-center align-middle p-1">
              Q No.:<span>{section[qIndex].queNo}</span>
            </p>
            <div className="flex flex-row align-middle p-1 ">
              <p className="navbar-brand text-sm text-white font-bold pr-1">
                View In:
              </p>
              <select
                className=" rounded-md text-black bg-white text-sm"
                aria-label="Default select example"
              >
                <option value="1">English</option>
                <option value="2">Hindi</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-row w-full">
        <div className=" w-[50%] h-full overflow-hidden ">
          <QuestionDiscription section={section} qIndex={qIndex} />
        </div>
        <div className=" w-[50%] h-full overflow-hidden">
          <div className="w-full height box-border border border-black">
            <div className=" h5 p-1">
              <p className=" uppercase  text-indigo-700">question</p>
            </div>
            <hr></hr>
            <div className="p-2 flex flex-col">
              <p>{section[qIndex].question}</p>
              <img className="w-[250px]" src={section[qIndex].image} />
            </div>
            <div className="flex flex-col mt-[40px]  gap-5 p-1 ">
              {Object.entries(options).map(([index, option]) => (
                <div className="form-check p-1 pl-3 ">
                  <hr className="p-1"></hr>
                  <input
                    className="form-check-input"
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    name="flexRadioDefault"
                    id={`flexRadioDefaul${index}`}
                    onChange={handleSelectedOption}
                  />
                  <label
                    className="form-check-label pl-4"
                    for={`flexRadioDefaul${index}`}
                  >
                    {`${option}`}
                  </label> 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mainContent
