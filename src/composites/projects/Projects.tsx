import React from "react";
import codingImage from "../../assets/coding.svg";
type Props = {};

const Projects = (props: Props) => {
  const projects: ProjectProps[] = [
    {
      projectTitle: "Task Management System",
      projectLink: "https://example.com/task-manager",
      TechStackFrontend: "React, Redux, Tailwind CSS",
      TechStackBackend: "Node.js, Express, MongoDB",
      aboutProject:
        "A web app for assigning and tracking employee tasks, with features like marking as done, tagging, and issue reporting.",
    },
    {
      projectTitle: "Email Marketing Automation",
      projectLink: "https://example.com/email-automation",
      TechStackFrontend: "React, React Flow, Tailwind CSS",
      TechStackBackend: "Node.js, Agenda, Nodemailer, MongoDB",
      aboutProject:
        "An app to create email workflows and automate email campaigns with visual flow builder and scheduling capabilities.",
    },
    {
      projectTitle: "Email Marketing Automation",
      projectLink: "https://example.com/email-automation",
      TechStackFrontend: "React, React Flow, Tailwind CSS",
      TechStackBackend: "Node.js, Agenda, Nodemailer, MongoDB",
      aboutProject:
        "An app to create email workflows and automate email campaigns with visual flow builder and scheduling capabilities.",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#4E5159] w-11/12 rounded-lg p-4">
        <h1 className="text-xl font-semibold underline">Projects</h1>
        {/* All the Project which I have done Till Now  */}
        <br />
        <div className="">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                projectTitle={project.projectTitle}
                projectLink={project.projectLink}
                TechStackFrontend={project.TechStackFrontend}
                TechStackBackend={project.TechStackBackend}
                aboutProject={project.aboutProject}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

type ProjectProps = {
  projectTitle: string;
  projectLink: string;
  TechStackFrontend: string;
  TechStackBackend: string;
  aboutProject: string;
};

const ProjectCard = ({
  projectTitle = "Project Title",
  projectLink,
  aboutProject = "About the Project",
  TechStackFrontend = "HTML,CSS, TAILWIND",
  TechStackBackend = "NODEJS, MONGODB",
}: ProjectProps) => {
  return (
    <div className="border flex flex-col border-white p-4 my-2">
      <div className="flex">
        <img src={codingImage} alt="" className="w-52 h-28" />
        <div className="flex flex-col  w-full ml-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">{projectTitle}</h1>

            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#21C55D]"
            >
              LINK
            </a>
          </div>
          <p className="">
            <span className="text-[#21C55D] ">Tech Stack -</span>
            Frontend :{TechStackFrontend} , Backend:{TechStackBackend}.
          </p>
          <p>{aboutProject}</p>
        </div>
      </div>
    </div>
  );
};
