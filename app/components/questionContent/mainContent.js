import React from 'react'
import QuestionContent from './questionContent';
import QuestionDiscription from './questionDiscription';



const mainContent = () => {
  return (
    <div className="w-[74%] h-full pl-4 ">
      <div>
        {/* question heading */}
        <nav className="bg-blue-400 h-8 rounded-md rounded-b-none box-border border border-black">
          <div className=" flex flex-row justify-between ">
            <p className="navbar-brand text-sm text-white font-bold flex justify-center align-middle p-1">
              Q No.:<span>1</span>
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
          <QuestionDiscription />
        </div>
        <div className=" w-[50%] h-full overflow-hidden">
          <QuestionContent />
        </div>
      </div>
    </div>
  );
}

export default mainContent
