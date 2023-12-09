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
      <div className="grid ">
        <SkillsTech />
        <SkillsTech />
        <SkillsTech />
        <SkillsTech />
      </div>
    </div>
  );
};

export default Skills;
