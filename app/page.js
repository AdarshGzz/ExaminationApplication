import Tabsection from "./components/Tabsection";
import MainContent from "./components/questionContent/mainContent";
import ResponseButtons from "./components/ResponseButtons";
import StudentDetails from "./components/Aside/studentDetails";
import QuestionPallet from "./components/Aside/QuestionPallet";
import QuestionStatus from "./components/Aside/QuestionStatus";



export default function Home() {
  return (
    <div>
      {/* aside */}
      <aside className="h-[89%] absolute w-[25rem] flex flex-col pt-1 ml-[68rem] mt-[55px] pr-3">
        <StudentDetails/>
        <QuestionPallet/>
        <QuestionStatus/>
      </aside>
      {/* header */}
      <div className=" h-[3rem] w-full bg-blue-400 flex justify-center items-center ">
        <h1 className=" font-extrabold text-2xl ">DEMO ONLINE TEST</h1>
      </div>
      {/* tabsection */}
      <div>
        <Tabsection />
      </div>
      {/* question content */}
      <div className=" h-full">
        <MainContent />
      </div>
      {/* response buttons */}
      <div>
        <ResponseButtons />
      </div>
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
