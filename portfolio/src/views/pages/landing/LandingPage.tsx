import React from "react";
// import { ModeToggle } from "../../../components/Mode-toggle";
import { Button } from "../../../components/ui/button";
import codingImage from "../../../assets/coding.svg";
import Intro from "../../../composites/introduction/Intro";
import Skills from "../../../composites/skills/Skills";
type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="">
      <Intro />
      <Skills></Skills>
    </div>
  );
};

export default LandingPage;
