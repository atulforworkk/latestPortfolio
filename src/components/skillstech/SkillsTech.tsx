import React from "react";
import CorrectIcon from "./correctIcon.svg";
type Props = {
  value: string;
};

const SkillsTech = ({ value }: Props) => {
  return (
    <div className="flex bg-[#212530] w-9/12 h-10 m-2   justify-center  items-center">
      <img src={CorrectIcon} alt="" className="px-6" />
      <p>{value}</p>
    </div>
  );
};

export default SkillsTech;
