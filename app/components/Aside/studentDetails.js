import React from 'react'


const StudentDetails = () => {
  return (
    <div className=" bg-slate-50 relative flex flex-row h-[11rem] rounded-md p-1 border-2 border-black w-[90%]">
      <div>
        <img
          className="h-[150px]"
          src="https://i.postimg.cc/4NR2cxsX/Screenshot-2023-02-07-at-1-02-53-PM.png"
        />
      </div>
      <div className="p-3">
        <p className="text-black">
          Time Left:<span> 20:20:20</span>
        </p>
        <p className="text-black mt-5 font-bold">Anish Kumar</p>
      </div>
    </div>
  );
}

export default StudentDetails
