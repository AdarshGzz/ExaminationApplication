import React from 'react'
import { useState,useEffect } from 'react';

const StudentDetails = () => {

  const [seconds, setSeconds] = useState(0);


  const minutes = 15;
  useEffect(() => {
    let interval = null;
    if (seconds === 0) {
      setSeconds(minutes * 60);
    } else {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, minutes]);

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
          Time Left:
          <span>
            {" "}
            {Math.floor(seconds / 60)}:
            {(seconds % 60).toString().padStart(2, "0")}
          </span>
        </p>
        <p className="text-black mt-5 font-bold">Anish Kumar</p>
      </div>
    </div>
  );
};

export default StudentDetails
