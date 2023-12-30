import React from "react";
import { motion } from "framer-motion";

type Props = {
  imageLink: string;
  projectTitle: string;
  description: string;
};

function ProjectCard({ imageLink, projectTitle, description}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-10 md:p-44 h-screen relative -bottom-16 "
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={imageLink}
        alt=""
        className="h-44 w-72 shadow-2xl"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-7xl">
        <h4 className="text-2xl text-slate-800 dark:text-blue-200 font-semibold text-center">
          {projectTitle}
        </h4>

        <p className="text-sm text-center md:text-left">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
