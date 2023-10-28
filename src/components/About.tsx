import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">
        About
      </h3>

      <motion.img
        src="https://cdn.discordapp.com/attachments/1165641776011427900/1166802470807285760/0352002.jpg?ex=654bd07b&is=65395b7b&hm=d835b1905ef1684cd1364c99d65282ace431fa97823d4f44a0843b636609164d&"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="mt-40 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover mr-5 md:rounded-lg md:h-72 md:w-60 md:mt-12 shadow-lg"
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
        <h4 className="text-2xl my-5 md:text-4xl font-medium font-poppins text-slate-800 basis-24 md:my-0">
          <span className="underline decoration-[#001D5E]/50">Who</span> Am I?{" "}
        </h4>
        <p className="text-xs flex-grow-0 max-w-[75%] max-h-[50%] mx-auto md:max-w-full md:text-sm">
          I&lsquo;m a second-year computer science (Artificial Intelligence) student
          with strong enthusiasm in both academics and extra-curricular
          activities, currently enrolling at the University of Nottingham,
          United Kingdom, fully sponsored by the Government of Malaysia. I have
          a strong grasp in Python, Next.js/React.js, Node.js, Java, C and SQL.
          I believe in independent self-learning and good time management. I&lsquo;ve
          been working hard to strengthen my skills in the area of machine
          learning, generative AI, full stack web/mobile app development, API
          and database integration. I&lsquo;m hoping to gain more hands-on experience
          in the computing field and so I&lsquo;m open to all job/internship
          opportunities in this related industry. I aspire to be a multi-faceted
          developer and bring positive impacts to the society.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
