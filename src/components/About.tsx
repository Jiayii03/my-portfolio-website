import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center pb-10">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-1xl">
        About
      </h3>

      <motion.img
        src="https://i.imgur.com/m6eidIi.jpeg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="mt-36 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover mr-5 md:rounded-lg min-h-[670px]: md:h-48 md:w-40 xl:h-64 xl:w-56 md:mt-12 shadow-2xl"
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        className="space-y-10 px-0 md:px-10 md:mt-12 w-screen mr-5 md:max-h-[60%]"
      >
        <h4 className="text-lg mt-6  md:text-3xl font-medium font-poppins text-slate-800 md:my-0 dark:text-slate-400">
          <span className="underline decoration-[#001D5E]/50 dark:decoration-[#D0DFFF] ">
            Who
          </span>{" "}
          Am I?{" "}
        </h4>
        <div className="!mt-5">
          <p className="text-xs flex-grow-0 m-0 max-w-[75%]  mx-auto md:max-w-full md:text-sm">
            I&lsquo;m a second-year computer science (Artificial Intelligence)
            student with strong enthusiasm in both academics and
            extra-curricular activities, currently enrolling at the University
            of Nottingham, United Kingdom, fully sponsored by the Government of
            Malaysia. I have a strong grasp in Python, Next.js/React.js,
            Node.js, Java, C and SQL. I believe in independent self-learning and
            good time management. I&lsquo;ve been working hard to strengthen my
            skills in the area of machine learning, generative AI, full stack
            web/mobile app development, API and database integration. I&lsquo;m
            hoping to gain more hands-on experience in the computing field and
            so I&lsquo;m open to all job/internship opportunities in this
            related industry.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
