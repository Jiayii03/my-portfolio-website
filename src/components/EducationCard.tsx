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
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 py-4 w-[360px] md:w-[500px] xl:w-[600px] snap-center bg-slate-300/30 opacity-60 hover:opacity-100 transition-all ease-in-out duration-200 cursor-pointer">
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
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover"
        src={imageLink}
        alt="uonLogo"
      />

      <div className="px-0 md:px-7 pl-[10%]">
        <h4 className="text-1xl font-light">{headerName}</h4>
        <p className="font-bold text-lg mt-1">{placeName}</p>
        <div className="flex space-x-2 my-2">
          {/* <img
            src="https://cdn.discordapp.com/attachments/1165641776011427900/1168214519902900285/1200px-Python-logo-notext.png?ex=6550f38d&is=653e7e8d&hm=135b8d95195fc13b80e4777de8b4a93176fd2b04f9c9ae8ffedd982703abe8ed&"
            alt="pythonLogo"
            className="h-8 w-8 rounded-full"
          /> */}
          {Object.entries(skills).map(([skill, imgUrl]) => (
            <img
                key={skill}
              src={imgUrl as string}
              alt={skill}
              className="h-8 w-8 rounded-full"
            />
          ))}
        </div>
        <p className="text-slate-500 mt-3 text-sm">{date}</p>

        <ul className="list-disc space-y-4 ml-3 mt-2 text-sm">
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default EducationCard;
