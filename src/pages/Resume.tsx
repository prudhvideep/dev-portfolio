import scannerGif from "../media/scanner.gif";
import resume from "../assets/Prudhvi_Mutyala_Resume.pdf";

export default function Experience() {
  return (
    <div className="mt-10 ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl opacity:1 transform:none">
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
                  <span className="italic text-sm font-normal">
                    May 2025{" "}
                    <span className="hidden md:block italian">(Expected)</span>
                  </span>
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
        <h1 className="font-[500] text-gray-900 mb-4 text-xl text-opacity-100">
          Professional Experience
        </h1>
        <div className="flex flex-row items-center justify-between">
          <div className="text-lg font-normal text-gray-900">
            Project Leader, Oracle Cloud
          </div>
          <div>
            <p className="text-gray-600">
              <span className="text-sm italic font-normal">Feb 2023</span>
              <span> - </span>
              <span className="italic text-sm font-normal">Aug 2023</span>
            </p>
          </div>
        </div>
        <ul className="mt-2 list-disc ml-8">
          <li className="list-item text-gray-600 text-md">
            Led development of a scalable Go-based customer engagement platform
            for Oracle Engagement Cloud, overcoming distributed system
            challenges and achieving 99.9% uptime, 30% reduced latency, and
            enhanced response personalization.
          </li>
          <li className="list-item text-gray-600">
            Achieved seamless API migration with zero downtime by validating the
            key performance metrics for the new APIs using a combination of
            traffic replay, sticky canaries and A/B testing.
          </li>
          <li className="list-item text-gray-600">
            Optimized data archiving and retrieval for applications in Oracle
            cloud by automating data migration from high-cost storage to
            archival tiers based on usage patterns, reducing storage costs by
            11%.
          </li>
        </ul>
        <div className="mt-4 flex flex-row items-center justify-between">
          <div className="text-lg font-normal text-gray-900">
            Senior Application Developer, Oracle Cloud
          </div>
          <div>
            <p className="text-gray-600">
              <span className="text-sm italic font-normal">Dec 2020</span>
              <span> - </span>
              <span className="italic text-sm font-normal">Feb 2023</span>
            </p>
          </div>
        </div>
        <ul className="mt-2 list-disc ml-8">
          <li className="list-item text-gray-600 text-md">
            Designed, proposed and rolled out a revamped, containerized build
            infrastructure for CI/CD using Docker, Kubernetes and Jenkins over 8
            months, migrating over 300 jobs used by over 100 developers
          </li>
          <li className="list-item text-gray-600">
            Implemented circuit breakers using Resilience4j and fallback
            mechanisms, reducing service outage incidents by 23%, resulting in a
            more fault-tolerant microservices architecture.
          </li>
          <li className="list-item text-gray-600">
            Enriched system metrics by integrating the platforms with telemetry,
            facilitating logging by correlating APIs with vector contexts
          </li>
        </ul>
        <div className="mt-4 flex flex-row items-center justify-between">
          <div className="text-lg font-normal text-gray-900">
            Application Developer, Oracle Cloud
          </div>
          <div>
            <p className="text-gray-600">
              <span className="text-sm italic font-normal">June 2018</span>
              <span> - </span>
              <span className="italic text-sm font-normal">Dec 2020</span>
            </p>
          </div>
        </div>
        <ul className="mt-2 list-disc ml-8">
          <li className="list-item text-gray-600 text-md">
            Developed cloud-native applications of the Oracle SCM platform that
            are scalable, distributed, and highly available, using Java, React,
            Oracle DB, Pl/Sql, Oracle Lambda, and OpenShift.
          </li>
          <li className="list-item text-gray-600">
            Introduced Redux for centralized state management, reducing UI
            latency by 19% and ensuring consistent real-time updates across
            diverse UI components.
          </li>
          <li className="list-item text-gray-600">
            Built REST APIs from scratch, architecting scalable and
            fault-tolerant solutions from the ground up using Spring Boot.
          </li>
          <li className="list-item text-gray-600">
            Completely automated the inventory platforms’ user experience
            testing process by integrating Selenium webdriver.
          </li>
        </ul>
        <div className="mt-4 flex flex-row items-center justify-between">
          <div className="text-lg font-normal text-gray-900">
            Research Assistant,{" "}
            <span>
              <a
                className="underline font-medium"
                href="https://spcrc.iiit.ac.in/"
                target="_blank"
              >
                Signal Processing and Communication Research Center
              </a>
            </span>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="text-sm italic font-normal">Aug 2016</span>
              <span> - </span>
              <span className="italic text-sm font-normal">June 2018</span>
            </p>
          </div>
        </div>
        <ul className="mt-2 list-disc ml-8">
          {/* <li className="list-item text-gray-600 text-md">
            
          </li> */}
        </ul>
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
