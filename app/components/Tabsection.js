import React from 'react'

const Tabsection = () => {
  
    const buttonStyle =
      "btn btn-primary border border-white hover:border-black bg-blue-400 w-[150px] p-1 text-white font-medium rounded hover:bg-blue-600  ";

  return (
    <div className="p-3 flex flex-row gap-3">
      <button type="button" className={`${buttonStyle}`}>
        ALL SECTIONS
      </button>
      <button type="button" className={`${buttonStyle}`}>
        PHYSICS
      </button>
      <button type="button" className={`${buttonStyle}`}>
        CHEMISTRY
      </button>
      <button type="button" className={`${buttonStyle}`}>
        MATHS
      </button>
    </div>
  );
}

export default Tabsection
