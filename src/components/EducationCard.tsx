import React from "react";
import { motion } from "framer-motion";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

interface Skills {
  [key: string]: string;
}

type Props = {
  imageLink: string | undefined;
  headerName: string;
  placeName: string;
  skills: {};
  date: string;
  notes: string[];
};

function EducationCard({
  imageLink,
  headerName,
  placeName,
  skills,
  date,
  notes,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 lg:py-7 w-[360px] lg:w-[470px] snap-center bg-[#F1E5EF]/40 hover:bg-[#F1E5EF]/60 transition-all ease-in-out duration-200 cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-700">
      {/* two elements in here */}
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="w-16 h-16 mt-3 rounded-full lg:w-16 lg:h-16 lg:mt-0 object-cover"
        src={imageLink}
        alt="uonLogo"
      />

      <div className="px-0 md:px-7 pl-[10%]">
        <h4 className="text-1xl font-light">{headerName}</h4>
        <p className="font-bold text-md mt-1">{placeName}</p>
        <div className="flex space-x-2 my-2">
          {Object.entries(skills).map(([skill, imgUrl]) => (
            <img
              key={skill}
              src={imgUrl as string}
              alt={skill}
              className="h-6 w-6 rounded-full object-cover"
            />
          ))}
        </div>
        <p className="text-slate-500 mt-3 text-sm">{date}</p>

        <ul className="list-disc space-y-4 ml-3 mt-2 text-xs">
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default EducationCard;
