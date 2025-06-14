import TipsyPasta from "../../images/TipsyPasta.png"
import PawseChat from "../../images/pawseChat.png"
import StarBucksReplica from "../../images/StarBucksReplica.png"
import DiceGame from "../../images/diceGame.png"
import NikeClone from "../../images/NikeClone.png"
import ValorantRandom from "../../images/ValorantRandom.png"

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      projectTitle: "Tipsy Pasta",
      projectLink: "https://example.com/task-manager",
      TechStackFrontend: "React, Redux, Tailwind CSS",
      TechStackBackend: "Node.js, Express, MongoDB",
      aboutProject:
        "A web app for assigning and tracking employee tasks, with features like marking as done, tagging, and issue reporting.",
      imageSrc: TipsyPasta,
      difficultyLevel: 4,
    },
    {
      projectTitle: "Pawse Chat",
      projectLink: "https://example.com/email-automation",
      TechStackFrontend: "React, React Flow, Tailwind CSS",
      TechStackBackend: "Node.js, Agenda, Nodemailer, MongoDB",
      aboutProject:
        "An app to create email workflows and automate email campaigns with visual flow builder and scheduling capabilities.",
      imageSrc: PawseChat,
      difficultyLevel: 4,
    },
    {
      projectTitle: "StarBucks Replica",
      projectLink: "https://example.com/email-automation",
      TechStackFrontend: "React, React Flow, Tailwind CSS",
      TechStackBackend: "Node.js, Agenda, Nodemailer, MongoDB",
      aboutProject:
        "An app to create email workflows and automate email campaigns with visual flow builder and scheduling capabilities.",
      imageSrc: StarBucksReplica,
      difficultyLevel: 2,
    },
    {
      projectTitle: "Dice Game ",
      projectLink: "https://dice-ochre.vercel.app/",
      TechStackFrontend: "React, React Flow, Tailwind CSS",
      TechStackBackend: "Node.js, Agenda, Nodemailer, MongoDB",
      aboutProject:
        "An app to create email workflows and automate email campaigns with visual flow builder and scheduling capabilities.",
      imageSrc: DiceGame,
      difficultyLevel: 4,
    },
    {
      projectTitle: "Nike Landing Page  ",
      projectLink: "https://nike-beta-seven.vercel.app/",
      TechStackFrontend: "React, React Flow, Tailwind CSS",
      TechStackBackend: "Node.js, Agenda, Nodemailer, MongoDB",
      aboutProject:
        "An app to create email workflows and automate email campaigns with visual flow builder and scheduling capabilities.",
      imageSrc: NikeClone,
      difficultyLevel: 4,
    },
    {
      projectTitle: "Valorant Randomizer   ",
      projectLink: "https://nike-beta-seven.vercel.app/",
      TechStackFrontend: "React, React Flow, Tailwind CSS",
      TechStackBackend: "Node.js, Agenda, Nodemailer, MongoDB",
      aboutProject:
        "An app to create email workflows and automate email campaigns with visual flow builder and scheduling capabilities.",
      imageSrc: ValorantRandom,
      difficultyLevel: 4,
    },
  ];
  
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#4E5159] w-11/12 rounded-lg p-4">
        <h1 className="text-xl font-semibold underline">Projects</h1>
        {/* All the Project which I have done Till Now  */}
        <br />
        <div className="">
          {projects.map((project) => {
            return (
              <ProjectCard
                projectTitle={project.projectTitle}
                projectLink={project.projectLink}
                TechStackFrontend={project.TechStackFrontend}
                TechStackBackend={project.TechStackBackend}
                aboutProject={project.aboutProject}
                imageSrc={project.imageSrc}
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
  imageSrc: string;
  difficultyLevel?: number;

};

const ProjectCard = ({
  projectTitle = "Project Title",
  projectLink,
  aboutProject = "About the Project",
  TechStackFrontend = "HTML,CSS, TAILWIND",
  TechStackBackend = "NODEJS, MONGODB",
  imageSrc,
}: ProjectProps) => {
  return (
    <div className="border flex flex-col border-white p-4 my-2">
      <div className="flex">
        <img src={imageSrc} alt="" className="w-52 h-24" />
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
