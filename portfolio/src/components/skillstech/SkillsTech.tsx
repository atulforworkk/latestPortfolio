import React from "react";
import CorrectIcon from "./correctIcon.svg";
type Props = {};

const SkillsTech = (props: Props) => {
  return (
    <div className="flex bg-[#212530] w-72 h-10 m-2   justify-center  items-center">
      <img src={CorrectIcon} alt="" className="px-6" />
      <p>Javascript</p>
    </div>
  );
};

export default SkillsTech;
