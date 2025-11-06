import React, { useState } from "react";

const ProjectDetails = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Project",
      description:
        "This is a full-stack e-commerce platform built with React and Django RESTful API",
      tech: ["React", "Django", "Tailwind CSS"],
      live_link: "https://tajamango-frontend.vercel.app/",
      github_repo: "https://github.com/Nuhan-Alam/tajamango_frontend",

    },
    {
      id: 2,
      title: "Event Management Website",
      description: "An event management website made fully with django.",
      tech: ["Django", "Tailwind CSS"],
      live_link: "https://event-management-1ea7.onrender.com/",
      github_repo: "https://github.com/Nuhan-Alam/event_management_project",

    },

  ];

  const toggleProject = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <div className="w-full p-2 md:p-6">
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            {/* Project Header - Clickable */}
            <button
              onClick={() => toggleProject(project.id)}
              className="cursor-pointer w-full px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white transition-colors flex items-center justify-between text-left"
            >
              <h3 className="text-2xl font-semibold ">{project.title}</h3>
              <svg
                className={`w-6 h-6  transition-transform duration-300 ${
                  activeProject === project.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Project Details - Expandable */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeProject === project.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 py-4 bg-gray-900 text-white">
                <p className="text-lg mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    
                  </div>
                </div>
                {/* Links */}
                <div className="flex flex-col md:flex-row">
                                        {/* Live-Link */}
                <div className="mt-5">
                  <a
                    href= {project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-full md:w-auto gap-3 bg-gray-700 hover:bg-white text-white hover:text-black px-5 py-2 rounded-full transition-colors group"
                  >
                    <span className="font-medium text-lg">Live Link</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                </div>
                    {/* Github Repo */}
                <div className="mx-0 md:mx-5 mt-5">
                  <a
                    href={project.github_repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center  w-full md:w-auto gap-3 bg-gray-700 hover:bg-white text-white hover:text-black px-5 py-2 rounded-full transition-colors group"
                  >
                    <span className="font-medium text-lg">Github Repo</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </a>
                </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
