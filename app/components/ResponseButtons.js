import React from 'react'



const ResponseButtons = () => {
  const buttonStyle = "btn btn-primary border border-white text-white bg-blue-400 uppercase p-1 font-medium rounded hover:bg-blue-600 hover:border hover:border-black ";

  return (
    <div className="p-3 flex flex-row gap-3">
      <button type="button" className={`${buttonStyle} w-[200px]`}>
        clear Response
      </button>
      <button type="button" className={`${buttonStyle} w-[130px]`}>
        review
      </button>
      <button type="button" className={`${buttonStyle} w-[130px]`}>
        dump
      </button>
      <button type="button" className={`${buttonStyle} w-[130px]`}>
        Previous
      </button>
      <button type="button" className={`${buttonStyle} w-[130px]`}>
        next
      </button>
    </div>
  );
}

export default ResponseButtons
