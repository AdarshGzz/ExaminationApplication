"use client";
import Tabsection from "./components/Tabsection";

export default function Home() {
  
  return (
    <div>
      {/* header */}
      <div className=" h-[3rem] w-full bg-blue-400 flex justify-center items-center ">
        <h1 className=" font-extrabold text-2xl ">DEMO ONLINE TEST</h1>
      </div>
      {/* tabsection */}
      <Tabsection />
      
      {/* footer */}
      <div>
        <div className="bg-cyan-800 mt-1 h-8 flex flex-row justify-center items-center">
          <p className=" text-white font-extrabold">
            <a
              className="no-underline hover:text-black"
              href="https://github.com/AdarshGzz"
            >
              @AdarshGzz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
