import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">
        Skills
      </h3>

      <h3 className="top-36 xl:top-40 absolute uppercase tracking-[3px] text-gray-500 text-sm">
        Try hovering over a skill!
      </h3>

      <div className="grid grid-cols-4 gap-7 mx-9 mt-32">
        <Skill imageLink="https://i.imgur.com/UPmkzzy.png" percentage="75%" />
        <Skill imageLink="https://i.imgur.com/yZYo6u5.png" percentage="80%" />
        <Skill imageLink="https://i.imgur.com/2xOKvpL.png" percentage="80%" />
        <Skill imageLink="https://i.imgur.com/9PBkwTF.png" percentage="90%" />
        <Skill imageLink="https://i.imgur.com/nfMITYl.png" percentage="85%" />
        <Skill imageLink="https://i.imgur.com/Zq5mre0.png" percentage="75%" />
        <Skill imageLink="https://i.imgur.com/Ay5aQvZ.png" percentage="80%" />
        <Skill imageLink="https://i.imgur.com/cSz7PIO.png" percentage="80%" />
        <Skill imageLink="https://i.imgur.com/U6g7PCo.png" percentage="75%" />
        <Skill imageLink="https://i.imgur.com/KJEN0p9.png" percentage="70%" />
        <Skill imageLink="https://i.imgur.com/wU650tz.png" percentage="90%" />
        <Skill imageLink="https://i.imgur.com/PCgFDSX.png" percentage="85%" />
      </div>
    </motion.div>
  );
}

export default Skills;
