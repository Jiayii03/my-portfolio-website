import React from "react";
import EducationCard from "./EducationCard";

type Props = {};

function Education({}: Props) {
  return (
  <div className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center">
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">Education</h3>

    <div className="w-full px-10 pt-24 md:pt-28 xl:pt-16 flex space-x-8 overflow-x-scroll snap-x snap-mandatory">
        <EducationCard />
        <EducationCard />
    </div>
  </div>
  );
}

export default Education;
