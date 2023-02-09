// "use client";
// import React from "react";
// import { useState } from "react";


// const QuestionContent = ({ section, qIndex }) => {
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleOptions = (index) => {
//     setSelectedOption(index);
//   };

//   console.log(selectedOption);

//   let optionArray = section[qIndex].options;
//   let options = [];
//   for (let option in optionArray) {
//     options.push(optionArray[option]);
//   }

//   return (
//     <div className="w-full height box-border border border-black">
//       <div className=" h5 p-1">
//         <p className=" uppercase  text-indigo-700">question</p>
//       </div>
//       <hr></hr>
//       <div className="p-2 flex flex-col">
//         <p>{section[qIndex].question}</p>
//         <img className="w-[250px]" src={section[qIndex].image} />
//       </div>
//       <div className="flex flex-col mt-[40px]  gap-5 p-1 ">
//         {Object.entries(options).map(([index, option]) => (
//           <div className="form-check p-1 pl-3 ">
//             <input
//               key={index}
//               className="form-check-input"
//               type="radio"
//               name="flexRadioDefault"
//               id={`flexRadioDefaul${index}`}
//               onChange={() => handleOptions(index)}
//             />
//             <label
//               className="form-check-label pl-4"
//               for={`flexRadioDefaul${index}`}
//             >
//               {`${option}`}
//             </label>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionContent;
