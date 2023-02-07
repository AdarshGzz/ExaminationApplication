import React from 'react'

const QuestionStatus = () => {
    const colStyle = "text-black text-left font-bold border border-black";
    const buttonStyle =
      "btn btn-primary text-white font-sm bg-blue-400 w-[6.5rem] rounded hover:bg-blue-600 border border-white hover:border-black";
  return (
    <div className=" bg-slate-50 relative flex flex-col overflow-hidden h-[17rem] rounded-md  border-2 mt-1 border-black w-[90%]">
      <div className="h-7 w-full pl-1 uppercase font-bold bg-blue-400">
        <p className=" cursor-pointer">Legend (Click to view)</p>
      </div>
      <div className="container text-center">
        <div className="row row-cols-2 grid grid-cols-2">
          <div className={`${colStyle} bg-green-400`}>
            <span>4 </span>
            Answer
          </div>
          <div className={`${colStyle} bg-red-400`}>
            <span>2 </span>
            Not Answer
          </div>
        </div>
        <div className="row row-cols-2 grid grid-cols-2">
          <div className={`${colStyle} bg-purple-400`}>
            <span>1 </span>
            Review+Ans
          </div>
          <div className={`${colStyle} bg-yellow-400`}>
            <span>1 </span>
            Review-Ans
          </div>
        </div>
        <div className="row row-cols-2 grid grid-cols-2">
          <div className={`${colStyle} bg-gray-400`}>
            <span>1 </span>
            Dump
          </div>
          <div className={`${colStyle}`}>
            <span>1 </span>
            No Visit
          </div>
        </div>
        <div className="row grid grid-cols-1">
          <div className={`${colStyle} bg-blue-400 text-center`}>
            <span>12 </span>
            Questions
          </div>
        </div>
      </div>
      <hr className="bg-black p-[1px] mt-2" />
      <div className="container text-center p-1 flex flex-col ml-5">
        <div className="flex flex-row gap-[5rem] p-2 ">
          <button
            type="button"
            className={`${buttonStyle}`}        
          >
            Profile
          </button>
          <button
            type="button"
            className={`${buttonStyle}`}         
          >
            Instr
          </button>
        </div>
        <div className="flex flex-row gap-[5rem] p-2">
          <button
            type="button"
            className={`${buttonStyle}`}
          >
            Questions
          </button>
          <button
            type="button"
            className={`${buttonStyle}`}        
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionStatus
