import React from "react";

const QuestionPallet = ({ section, userResponses, reviews, dumps }) => {

  const colStyle = "text-black font-bold border border-black";

  return (
    <div className=" bg-slate-50 relative flex flex-col overflow-hidden h-[15rem] rounded-md  border-2 mt-1 border-black w-[90%]">
      <div className="h-7 w-full pl-1 uppercase font-bold bg-blue-400">
        <p>Question pallet</p>
      </div>
      <div className="container text-center ">
        <div className=" grid-container grid p-1 grid-cols-4">
          {Object.entries(section).map(([index, question]) => {
            let color = "white";
            if (userResponses[index] === "review") {
              color = "rgb(192 132 252 )";
            } else if (reviews.includes(Number(index))) {
              color = "rgb(250 204 21";
            } else if (dumps.includes(Number(index))) {
              color = "rgb(156 163 175)";
            } else if (userResponses[index]) {
              color = "rgb(74 222 128)";
            }
            return (
              <div
                key={question.queNo}
                className={`${colStyle}  question-box ${
                  question === question.queNo ? "selected" : ""
                }`}
                style={{ background: color }}
                // onClick={() => handleQuestionClick(question.queNo)}
              >
                {/* {Number(index)+1} */}
                {question.queNo}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionPallet;
