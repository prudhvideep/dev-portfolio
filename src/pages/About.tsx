import { IoMdPerson } from "react-icons/io";
import { TbLetterP } from "react-icons/tb";
import {
  FaDocker,
  FaPython,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { FaAws, FaReact, FaTerminal, FaGolang } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import {
  SiTerraform,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiWebassembly,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PiGraph } from "react-icons/pi";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 ml-auto mr-auto w-8/10 md:w-9/10 max-w-3xl opacity:1 transform:none">
      <p className="text-[17px] font-serif text-gray-500">
        I hope to develop better interactive software for people to cultivate
        and share ideas, and to meaningfully express what brings them joy.
        <br></br>
        <br></br>
        Towards that goal, I am a generalist and care deeply about systems,
        which form the fundamental building blocks of our applications; and
        interaction design, how we use and live with computers that are all
        around us
      </p>
      <div className="mt-10">
        <h1 className="font-medium text-gray-900 mb-4 text-xl">Experience</h1>
        <ol className="relative border-s border-gray-200">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-md font-medium text-gray-900">
                Project Leader
              </div>
            </div>
            <div className=" text-sm font-normal text-gray-500">
              Oracle Cloud
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="text-md font-medium text-gray-900">
              Senior Application Developer
            </div>
            <div className="text-sm font-normal text-gray-500">
              Oracle Cloud
            </div>
          </li>
        </ol>
        <div
          onClick={() => navigate("/Resume")}
          className="hover:underline text-sm hover:cursor-pointer"
          aria-label="Read more blogs"
        >
          View Details
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-medium text-gray-900 mb-4 text-xl">
          Projects / Oss
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
          <div className="mt-2 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div>
                <FaTerminal className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <div className="text-sm mb-1 font-medium text-gray-900">
                  fnd
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  A CLI tool for fast local and SSH file searches, supporting
                  regex and glob patterns.
                </div>
                <div className="hidden md:flex mt-2 flex-row space-x-2 items-center">
                  <FaGolang className="text-3xl" />
                </div>
                <div className="mt-4 flex flex-row space-x-4 justify-start">
                  <motion.a
                    href="https://github.com/prudhvideep/fnd"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaGithub className="mr-1" />
                    <span className="underline hover:no-underline">Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-5 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div>
                <IoMdPerson className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <div className="text-sm mb-1 font-medium text-gray-900">
                  Video Face Recognistion
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  An app for detecting faces in a video, built using amazon web
                  services.
                </div>
                <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                  <FaPython />
                  <FaDocker className="text-xl" />
                  <SiTerraform />
                  <FaAws className="text-xl" />
                  <SiJavascript />
                  <FaReact />
                  <SiTailwindcss />
                </div>
                <div className="mt-4 flex flex-row space-x-4 justify-start">
                  <motion.a
                    href="https://main.d2g4ycz7ogc8gz.amplifyapp.com/"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    <span className="underline hover:no-underline">Demo</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/prudhvideep/Video-Face-Recognition"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaGithub className="mr-1" />
                    <span className="underline hover:no-underline">Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-5 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div>
                <PiGraph className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <div className="text-sm mb-1 font-medium text-gray-900">
                  Snippets
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  A Zettelkasten-inspired personal knowledge base with
                  Notion-like rich text editing.
                </div>
                <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                  <SiTypescript />
                  <FaReact />
                  <SiTailwindcss />
                  <SiWebassembly />
                </div>
                <div className="mt-4 flex flex-row space-x-4 justify-start">
                  <motion.a
                    href="https://main.d2g4ycz7ogc8gz.amplifyapp.com/"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    <span className="underline hover:no-underline">Demo</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/prudhvideep/Video-Face-Recognition"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaGithub className="mr-1" />
                    <span className="underline hover:no-underline">Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <div className="mt-5 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div>
                <FaRobot className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <div className="text-sm mb-1 font-medium text-gray-900">
                  Lead Outreach Automation
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  Automating omni-channel communication for lead outreach and
                  financial services.
                </div>
                <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                  <RiJavaLine className="text-lg" />
                  <SiSpringboot />
                  <BiLogoPostgresql className="text-lg" />
                  <SiAmazondynamodb />
                  <FaReact />
                  <SiTailwindcss />
                </div>
                <div className="mt-4 flex flex-row space-x-4 justify-start">
                  <motion.a
                    href="https://main.d33hnvrtcy55fk.amplifyapp.com"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    <span className="underline hover:no-underline">Demo</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/prudhvideep/Lead-Outreach-Automation"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaGithub className="mr-1" />
                    <span className="underline hover:no-underline">Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-5 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              <div>
                <MdTimeline className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <div className="text-sm mb-1 font-medium text-gray-900">
                  Ease Abode
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  An app that simplifies living in shared spaces by streamlining
                  tasks, expenses and reminders.
                </div>
                <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                  <IoLogoFirebase />
                  <SiAwslambda />
                  <FaReact />
                  <SiTailwindcss />
                </div>
                <div className="mt-4 flex flex-row space-x-4 justify-start">
                  <motion.a
                    href="https://main.dnps4nuz4t58p.amplifyapp.com/"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    <span className="underline hover:no-underline">Demo</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/prudhvideep/ease-abode"
                    target="_blank"
                    className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaGithub className="mr-1" />
                    <span className="underline hover:no-underline">Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div> */}
          <div className="mt-5 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <TbLetterP className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
              <div className="text-sm mb-1 font-medium text-gray-900">
                Portfolio
              </div>
              <div className="max-w-xs text-sm font-normal text-gray-500">
                Highlight your work and acheivements using this minimal
                template.
              </div>
              <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                <SiTypescript />
                <SiJavascript />
                <FaReact />
                <FiFramer />
                <SiTailwindcss />
              </div>
              <div className="mt-4 flex flex-row space-x-4 justify-start">
                <motion.a
                  href="https://github.com/prudhvideep/Video-Face-Recognition"
                  target="_blank"
                  className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <FaGithub className="mr-1" />
                  <span className="underline hover:no-underline">Source</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          onClick={() => navigate("/Projects")}
          className="mt-4 hover:underline text-sm hover:cursor-pointer"
        >
          View More
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-medium text-gray-900 mb-4 text-xl">Latest Posts</h1>
        <a
          href="/Blog/LearnDistSys"
          className="flex flex-col space-y-1 mb-4 hover:bg-gray-100 hover:rounded-md p-2 hover:underline hover:cursor-pointer"
        >
          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-xs">2024-10-10</p>
              <p className="text-gray-700 text-lg font-normal tracking-tight">
                An approach to re-learn distributed systems.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://medium.com/p/e28f71a6b8ab"
          target="_blank"
          className="flex flex-col space-y-1 mb-4 hover:bg-gray-100 hover:rounded-md p-2 hover:underline hover:cursor-pointer"
        >
          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-xs">2024-04-26</p>
              <p className="text-gray-700 text-lg font-normal tracking-tight">
                Deploying Open Ai API on AWS lambda
              </p>
            </div>
          </div>
        </a>
        <div
          onClick={() => navigate("/Blog")}
          className="hover:underline text-sm hover:cursor-pointer"
          aria-label="Read more blogs"
        >
          Read More
        </div>
      </div>
    </div>
  );
};

export default About;
