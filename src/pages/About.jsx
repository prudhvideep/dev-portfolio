import { IoMdPerson } from "react-icons/io";
import { TbLetterP } from "react-icons/tb";
import {
  FaDocker,
  FaPython,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { FaAws, FaReact } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { SiTerraform, SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="mt-10 ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl opacity:1 transform:none">
      <p className="text-[17px] font-serif text-gray-500">
        A Roman emperor and Stoic philosopher who wrote reflective thoughts in
        his "Meditations," pondering on duty, virtue, and the transience of
        life.
      </p>
      <div className="mt-16">
        <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
        <ol className="relative border-s border-gray-200">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-md font-medium text-gray-900">
                Project Leader
              </div>
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              Oracle Cloud
            </div>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="text-md font-medium text-gray-900">
              Senior Application Developer
            </div>
            <div className="mb-4 text-sm font-normal text-gray-500">
              Oracle Cloud
            </div>
          </li>
        </ol>
      </div>
      <div className="mt-16">
        <h1 className="font-medium text-gray-900 mb-4 text-lg">Projects</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
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
                  An app for detecting faces in a video, built using{" "}
                  <span className="font-sans font-medium">AWS</span> services.
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
              whileHover={{ scale: 1.1 }}
            >
              <TbLetterP className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
              <div className="text-sm mb-1 font-medium text-gray-900">
                Portfolio
              </div>
              <div className="max-w-xs text-sm font-normal text-gray-500">
                Highlight your work using this minimal template.
              </div>
              <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
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
      </div>
    </div>
  );
};

export default About;
