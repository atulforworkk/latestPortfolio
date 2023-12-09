import React from "react";
// import { ModeToggle } from "../../../components/Mode-toggle";
import { Button } from "../../../components/ui/button";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="flex h-[80vh] ">
      <div className="flex-1 bg-pink-500">
        <div>
          <h1 className="text-2xl p-6 font-semibold">
            Hi,I am Atul . <br />I love to build amazing Apps.
          </h1>
          <p className="text-lg">
            A web developer with a passion for creating responsive and
            user-friendly websites. Proficient in frontend technology,, with a
            keen eye for design and a commitment to delivering seamless and
            engaging user experiences. Experienced in collaborating with
            cross-functional teams to bring creative ideas to life and staying
            abreast of the latest front-end development trends.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-green-500"></div>
    </div>
  );
};

export default LandingPage;
