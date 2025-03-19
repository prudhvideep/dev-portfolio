import { IoMdPerson } from "react-icons/io";
import { TbLetterP } from "react-icons/tb";
import {
  FaDocker,
  FaPython,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  FaAws,
  FaReact,
  FaTerminal,
  FaGolang,
  FaFeatherPointed,
} from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiTerraform,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiWebassembly,
  SiC,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PiGraph } from "react-icons/pi";
import resume from "../assets/Prudhvi_Mutyala_Resume.pdf";
import { GiAsteroid } from "react-icons/gi";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl opacity:1 transform:none">
      <h1 className="font-medium">Hi There!!</h1>
      <p className="mt-2 text-gray-600">
        I'm Prudhvi! Here's my{" "}
        <span>
          <a
            target="_block"
            href="https://github.com/prudhvideep"
            className="font-medium underline mr-1"
          >
            Github
          </a>
        </span>
        and{" "}
        <span>
          <a
            target="_block"
            href={resume}
            className="font-medium underline mr-1"
          >
            Resume
          </a>
        </span>
        .
      </p>
      <p className="mt-2 text-gray-600">
        I like working with low-level abstractions for the control they offer in
        composing solutions from the ground up using first principles.
      </p>
      <p className="mt-2 text-gray-600">
        I hate writing bloated software, my coding philosophy is hugely
        influenced from{" "}
        <span className="underline font-medium">
          <a
            href="https://cscie2x.dce.harvard.edu/hw/ch01s06.html"
            target="_blank"
          >
            The Unix Philosophy
          </a>
        </span>{" "}
        and{" "}
        <span className="underline font-medium">
          <a
            href="https://matklad.github.io/2022/10/06/hard-mode-rust.html"
            target="_blank"
          >
            Hard mode Rust
          </a>
        </span>
        . These days my coding stack mostly involves{" "}
        <span className="underline">Go</span>,{" "}
        <span className="underline">Typescript</span> and{" "}
        <span className="underline">Python</span>.
      </p>
      <p className="mt-2 text-gray-600">
        Look around - You'll see that i particularly like{" "}
        <span className="font-medium">
          distributed systems, programming languages, machine learning, computer graphics
        </span>{" "}
        and <span className="font-medium">music.</span>
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
          <li className="mb-8 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
            <div className="text-md font-medium text-gray-900">
              Senior Application Developer
            </div>
            <div className="text-sm font-normal text-gray-500">
              Oracle Cloud
            </div>
          </li>
        </ol>
        <a
          onClick={() => navigate("/Resume")}
          className="hover:underline text-sm hover:cursor-pointer"
          aria-label="Read more blogs"
        >
          View Details
        </a>
      </div>
      <div className="mt-10">
        <h1 className="font-medium text-gray-900 mb-4 text-xl">
          Projects / Oss
        </h1>
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
                <GiAsteroid className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <h3 className="text-sm mb-1 font-medium text-gray-900">
                  Asteroids
                </h3>
                <p className="max-w-xs text-sm font-normal text-gray-600">
                  A retro asteroids game in C to introduce Raylib at ASU's Game
                  Dev reading group.
                </p>
                <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                  <SiC />
                  <SiWebassembly />
                </div>
                <div className="mt-4 flex flex-row space-x-2 md:space-x-4 justify-start">
                  <motion.a
                    href="https://prudhvideep.github.io/asteroids/asteroids.html"
                    target="_blank"
                    className="flex items-center text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    <span className="underline hover:no-underline">Demo</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/prudhvideep/asteroids"
                    target="_blank"
                    className="flex items-center text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
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
                <h3 className="text-sm mb-1 font-medium text-gray-900">
                  Video Face Recognistion
                </h3>
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
                <div className="mt-4 flex flex-row space-x-2 md:space-x-4 justify-start">
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
                <FaTerminal className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <h3 className="text-sm mb-1 text-gray-900">fnd</h3>
                <p className="max-w-xs text-sm font-normal text-gray-600">
                  A CLI tool for fast local and SSH file searches, supporting
                  regex and glob patterns.
                </p>
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
                <PiGraph className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
                <h3 className="text-sm mb-1 font-medium text-gray-900">
                  Snippets
                </h3>
                <p className="max-w-xs text-sm font-normal text-gray-600">
                  A Zettelkasten-inspired personal knowledge base with
                  Notion-like rich text editing.
                </p>
                <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                  <SiTypescript />
                  <FaReact />
                  <SiTailwindcss />
                  <SiWebassembly />
                  <BiLogoPostgresql />
                </div>
                <div className="mt-4 flex flex-row space-x-2 md:space-x-4 justify-start">
                  <motion.a
                    href="https://snippets-3fo.pages.dev/"
                    target="_blank"
                    className="flex items-center text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <FaExternalLinkAlt className="mr-1" />
                    <span className="underline hover:no-underline">Demo</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/prudhvideep/Snippets"
                    target="_blank"
                    className="flex items-center text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
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
          <div className="mt-5 mb-4 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <TbLetterP className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
              <h3 className="text-sm mb-1 font-medium text-gray-900">
                Portfolio
              </h3>
              <p className="max-w-xs text-sm font-normal text-gray-600">
                Highlight your work and acheivements using this minimal
                template.
              </p>
              <div className="hidden md:flex mt-4 flex-row space-x-2 items-center">
                <SiTypescript />
                <SiJavascript />
                <FaReact />
                <FiFramer />
                <SiTailwindcss />
              </div>
              <div className="mt-4 flex flex-row space-x-4 justify-start">
                <motion.a
                  href="https://github.com/prudhvideep/dev-portfolio"
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
          <div className="mt-5 mb-4 p-2 group">
            <motion.div
              className="p-2 hover:cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <FaFeatherPointed className="w-8 h-8 rounded-lg text-white bg-black p-2 mb-3" />
              <h3 className="text-sm mb-1 font-medium text-gray-900">Quill</h3>
              <p className="max-w-xs text-sm font-normal text-gray-600">
                A minimal, dependency-free text editor written in C.
              </p>
              <div className="hidden md:flex mt-4 flex-row space-x-2 items-center"></div>
              <div className="mt-4 flex flex-row space-x-4 justify-start">
                <motion.a
                  href="https://github.com/prudhvideep/quill"
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
        <a
          onClick={() => navigate("/Projects")}
          className="mt-4 hover:underline text-sm hover:cursor-pointer"
        >
          View More
        </a>
      </div>
      <div className="mt-10">
        <h1 className="font-medium text-gray-900 mb-4 text-xl">Latest Posts</h1>
        <a
          href="/Blog/LearnDistSys"
          className="flex flex-col space-y-1 mb-4 hover:bg-gray-100 hover:rounded-md p-2 hover:underline hover:cursor-pointer"
        >
          <div className="w-full flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <p className="text-gray-600 text-xs">2024-10-10</p>
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
              <p className="text-gray-600 text-xs">2024-04-26</p>
              <p className="text-gray-700 text-lg font-normal tracking-tight">
                Deploying Open Ai API on AWS lambda
              </p>
            </div>
          </div>
        </a>
        <a
          onClick={() => navigate("/Blog")}
          className="hover:underline text-sm hover:cursor-pointer"
          aria-label="Read more blogs"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default About;
