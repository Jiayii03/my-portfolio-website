import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
  <div className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">Experience</h3>

    <div>
        <ExperienceCard />
    </div>
  </div>
  );
}

export default Experience;
