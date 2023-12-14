import React from "react";
// import { ModeToggle } from "../../../components/Mode-toggle";
import { Button } from "../../../components/ui/button";
import codingImage from "../../../assets/coding.svg";
import Intro from "../../../composites/introduction/Intro";
import Skills from "../../../composites/skills/Skills";
import HireMe from "../../../composites/hireMe/HireMe";
type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="">
      <Intro />
      <Skills />
      <HireMe />
    </div>
  );
};

export default LandingPage;
