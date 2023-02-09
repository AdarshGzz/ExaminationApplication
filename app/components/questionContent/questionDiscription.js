import React from 'react'



const QuestionDiscription = ({ section, qIndex }) => {
  return (
    <div className="w-full height box-border border border-black">
      <div className=" h5 p-1">
        <p className=" uppercase text-indigo-700">question instructions</p>
      </div>
      <hr></hr>
      <div className="p-2">
        <p>{section[qIndex].queDiscription}</p>
      </div>
    </div>
  );
};

export default QuestionDiscription
