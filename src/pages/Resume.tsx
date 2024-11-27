import scannerGif from "../media/scanner.gif";
import resume from "../assets/Prudhvi_Mutyala_Resume.pdf";

export default function Experience() {
  return (
    <div className="mt-10 ml-auto mr-auto w-8/10 md:w-9/10 max-w-3xl opacity:1 transform:none">
      <div className="mt-10">
        <h1 className="font-[500] text-gray-900 mb-4 text-xl text-opacity-100">
          Education
        </h1>
        <div className="relative border-gray-200">
          <div className="mb-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-md font-normal text-gray-900">
                Arizona State University
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="text-sm italic font-normal">2023</span>
                  <span> - </span>
                  <span className="italic text-sm font-normal">Present</span>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className=" text-sm font-normal text-gray-500">
                M.S.C.S in <span className="italic">Computer Science</span>
              </div>
              <p className="text-sm font-mono font-thin text-gray-700">
                CGPA : 4.1
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-md font-normal text-gray-900">
                International Institute of Information Technology, Hyderabad
                (IIIT-H)
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="text-sm italic font-normal">2017</span>
                  <span> - </span>
                  <span className="italic text-sm font-normal">2018</span>
                </p>
              </div>
            </div>
            <div className="text-sm font-normal text-gray-500">
              M.S in <span className="italic">Computer Engineering</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-row items-center justify-between">
              <div className="text-md font-normal text-gray-900">
                International Institute of Information Technology, Hyderabad
                (IIIT-H)
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="text-sm italic font-normal">2013</span>
                  <span> - </span>
                  <span className="italic text-sm font-normal">2017</span>
                </p>
              </div>
            </div>
            <div className="text-sm font-normal text-gray-500">
              Bachelors in <span className="italic">Computer Engineering</span>
            </div>
          </div>
        </div>
        <h4 className="font-[500] text-md mt-4 mb-1">Teaching:</h4>
        <ul className="list-disc ml-8">
          <li className="list-item text-gray-600">
            Ta for <span className="italic">Advanced communication theory</span>
            , Fall 2017
          </li>
          <li className="list-item text-gray-600">
            Ta for <span className="italic">Information Theory and Coding</span>
            , Fall 2016
          </li>
        </ul>
        <h4 className="font-[500] text-md mt-4 mb-1">
          Graduate-level Techincal Coursework:
        </h4>
        <ul className="list-disc ml-8">
          <li className="list-item text-gray-600">
            Distributed Database Systems (CSE 512)
          </li>
          <li className="list-item text-gray-600">
            Distributed Software Development (CSE 445 / CSE 598)
          </li>
          <li className="list-item text-gray-600">Cloud Computing (CSE 575)</li>
          <li className="list-item text-gray-600">Data Mining (CSE 572)</li>
          <li className="list-item text-gray-600">
            Statistical Machine Learning (CSE 575)
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h1 className="font-[450] text-gray-900 mb-4 text-xl">
          Professional Experience
        </h1>
      </div>
      <div className="mt-16 p-6 w-full border border-gray-300 bg-white rounded-lg shadow-lg">
        <div className="flex flex-row items-center justify-center space-x-6">
          <img
            className="w-20 h-20 rounded-full"
            alt="Scanner Gif"
            src={scannerGif}
          />
          <div className="flex flex-col">
            <h2 className="text-gray-700 font-serif font-semibold text-lg mb-2">
              Need a copy of my resume?
            </h2>
            <a
              href={resume}
              target="_blank"
              className="underline text-gray-700 hover:text-gray-900 font-serif"
            >
              Click here to download it!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
