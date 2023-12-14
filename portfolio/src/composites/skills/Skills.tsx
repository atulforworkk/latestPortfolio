import { Cpu } from "lucide-react";
import SkillsTech from "../../components/skillstech/SkillsTech";
type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <div className="w-100 flex flex-col items-center justify-center ">
        <Cpu className="" />
        <h1 className="text-2xl font-semibold">Skills & Technologies</h1>
      </div>
      <div className="grid grid-cols-2  justify-items-center w-full">
        {skillSet.map((value, index) => {
          return <SkillsTech value={value}></SkillsTech>;
        })}
      </div>
    </div>
  );
};

export default Skills;

const skillSet = ["JavaScript", "React", "Tailwind", "Mantine UI", "Shadcn UI"];
