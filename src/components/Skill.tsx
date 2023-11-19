import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  imageLink: string | undefined;
  percentage: string;
};

function Skill({ directionLeft, imageLink, percentage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0}}
        src={imageLink}
        className="rounded-full h-16 w-h-16 md:h-20 md:w-20 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:h-20 md:w-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100%">{percentage}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
