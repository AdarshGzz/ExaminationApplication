"use client";
import React from "react";
import { useState } from "react";


const QuestionContent = () => {
  const [image, setImage] = useState(null);
    // setImage('https://i.postimg.cc/nck6n0Lt/Qimg.png')

  return (
    <div className="w-full height box-border border border-black">
      <div className=" h5 p-1">
        <p className=" uppercase  text-indigo-700">question</p>
      </div>
      <hr></hr>
      <div className="p-2 flex flex-col">
        <p>
          A block of mass m is projected with velocity Vo as shown in the fig.
          The distance between free ends is &g. Maximum displacement of the
          block during the motion.
        </p>
       <img className="w-[250px]" src={'https://i.postimg.cc/nck6n0Lt/Qimg.png'} />
      </div>
      <div className="flex flex-col mt-[40px]  gap-5 p-1 ">
        <hr />
        <div className="form-check p-1 pl-3 ">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label pl-4" for="flexRadioDefault1">
            Option 1
          </label>
        </div>
        <hr />
        <div className="form-check p-1 pl-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label pl-4" for="flexRadioDefault2">
            Option 2
          </label>
        </div>
        <hr />
        <div className="form-check p-1 pl-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label className="form-check-label pl-4" for="flexRadioDefault3">
            Option 3
          </label>
        </div>
        <hr />
        <div className="form-check p-1 pl-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
          />
          <label className="form-check-label pl-4" for="flexRadioDefault4">
            Option 4
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuestionContent;
