import React from 'react'

const QuestionPallet = () => {

  const colStyle = 'text-black font-bold border  border-black'
  return (
    <div className=" bg-slate-50 relative flex flex-col overflow-hidden h-[15rem] rounded-md  border-2 mt-1 border-black w-[90%]">
      <div className="h-7 w-full pl-1 uppercase font-bold bg-blue-400">
        <p>Question pallet</p>
      </div>
      <div className="container text-center ">
        <div className=" grid-container grid p-1 grid-cols-4">
          <div className={`${colStyle}`}>1</div>
          <div className={`${colStyle}`}>2</div>
          <div className={`${colStyle}`}>3</div>
          <div className={`${colStyle}`}>4</div>
          <div className={`${colStyle}`}>5</div>
          <div className={`${colStyle}`}>6</div>
          <div className={`${colStyle}`}>7</div>
          <div className={`${colStyle}`}>8</div>
          <div className={`${colStyle}`}>9</div>
          <div className={`${colStyle}`}>10</div>
          <div className={`${colStyle}`}>11</div>
          <div className={`${colStyle}`}>12</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPallet
