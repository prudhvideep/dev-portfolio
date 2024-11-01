import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import projectsData from "../assets/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterCategories = {
    type: ["Data Science / Ai", "Frontend", "Backend", "Game"],
    language: ["Go", "Java", "Python", "TypeScript", "JavaScript", "Bash", "Sql"],
    technology: [
      "GraphQl", "gRPC", "Tailwind", "Redis", "PostgreSQL", "React", "D3", 
      "Next", "Node", "Docker", "Kubernetes", "Terraform", "SpringBoot", 
      "Oracle", "MySql", "MongoDB", "TensorFlow", "Scikitlearn", "Firebase", "aws"
    ]
  };

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleFilterClick = (element) => {
    setActiveFilter(activeFilter === element ? null : element);
  };

  const filteredProjects = projects.filter(project => {
    if (!activeFilter) return true;
    return project.Type === activeFilter || project.Stack.includes(activeFilter);
  });

  const isTagHighlighted = (tag) => {
    return activeFilter === tag;
  };

  return (
    <div className="mt-6 ml-auto mr-auto w-9/10 md:w-9/10 max-w-3xl opacity:1 transform:none">
      <p className="font-medium text-slate-700">
        Learn to build, build to learn
      </p>
      <div className="w-full mt-4 flex flex-col">
        <div className="w-full flex flex-col space-y-4">
          <div className="w-full">
            <h1 className="font-normal text-md text-slate-500">
              Filter by type:
            </h1>
            <div className="mt-4 flex flex-wrap gap-4">
              {filterCategories.type.map((element) => (
                <div
                  key={element}
                  onClick={() => handleFilterClick(element)}
                  className={`border p-1 text-sm font-medium rounded-md hover:cursor-pointer hover:scale-105 transition-colors
                    ${activeFilter === element 
                      ? 'bg-blue-200 text-blue-700' 
                      : 'bg-slate-200 text-slate-500 hover:text-slate-600'}`}
                >
                  {element}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-normal text-md text-slate-500">
              Filter by programming language:
            </h1>
            <div className="mt-4 flex flex-wrap gap-4">
              {filterCategories.language.map((element) => (
                <div
                  key={element}
                  onClick={() => handleFilterClick(element)}
                  className={`border p-1 text-sm font-medium rounded-md hover:cursor-pointer hover:scale-105 transition-colors
                    ${activeFilter === element 
                      ? 'bg-blue-200 text-blue-700' 
                      : 'bg-slate-200 text-slate-500 hover:text-slate-600'}`}
                >
                  {element}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-normal text-md text-slate-500">
              Filter technologies:
            </h1>
            <div className="mt-4 flex flex-wrap gap-4">
              {filterCategories.technology.map((element) => (
                <div
                  key={element}
                  onClick={() => handleFilterClick(element)}
                  className={`border p-1 text-sm font-medium rounded-md hover:cursor-pointer hover:scale-105 transition-colors
                    ${activeFilter === element 
                      ? 'bg-blue-200 text-blue-700' 
                      : 'bg-slate-200 text-slate-500 hover:text-slate-600'}`}
                >
                  {element}
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-4"></hr>
        </div>
        <div className="w-full grid gap-4">
          {filteredProjects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="border-b p-2 mt-2 w-full rounded-md flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 flex flex-wrap gap-2 place-content-start">
                  {project.Stack.map((tech, index) => (
                    <div
                      key={index}
                      className={`p-1 text-center text-sm font-medium rounded-md hover:cursor-pointer hover:scale-105 whitespace-nowrap transition-colors
                        ${isTagHighlighted(tech)
                          ? 'bg-blue-200 text-blue-700'
                          : 'bg-slate-200 text-slate-500 hover:text-slate-600'}`}
                      onClick={() => handleFilterClick(tech)}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="w-full md:w-1/2 flex flex-col space-y-2">
                  <h1 className="text-xl font-semibold max-w-full truncate">
                    {project.Title}
                  </h1>
                  <p className="text-md font-normal text-slate-500 overflow-hidden text-ellipsis max-h-20 break-words line-clamp-3">
                    {project.Desciption}
                  </p>
                  <div className="flex flex-row justify-start gap-4 mt-2">
                    <motion.a
                      href={`${project.Link}`}
                      target="_blank"
                      className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                      whileHover={{
                        scale: 1.05,
                      }}
                    >
                      <FaGithub className="mr-1" />
                      <span className="underline hover:no-underline">
                        Source
                      </span>
                    </motion.a>
                    {project?.Demo && (
                      <motion.a
                        href={`${project.Demo}`}
                        target="_blank"
                        className="flex items-center text-sm text-gray-500 hover:font-semibold hover:text-gray-900 transition-colors"
                        whileHover={{
                          scale: 1.05,
                        }}
                      >
                        <FaExternalLinkAlt className="mr-1" />
                        <span className="underline hover:no-underline">
                          Demo
                        </span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;