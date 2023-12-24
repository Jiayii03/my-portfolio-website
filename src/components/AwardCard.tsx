import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type AwardCardProps = {
  title: string;
  description: string;
  issuedBy: string;
  imageLink: string;
};

const AwardCard = ({
  title,
  description,
  issuedBy,
  imageLink,
}: AwardCardProps) => {
  return (
    <article className="flex flex-col md:flex-row rounded-lg justify-between py-2 md:py-3 px-8 flex-shrink-0 w-[90%] bg-[#F1E5EF]/40 hover:bg-gradient-to-br hover:from-slate-100 hover:to-blue-100 dark:bg-slate-800 dark:hover:bg-gradient-to-br dark:hover:from-slate-500 transition-all ease-in-out duration-200">
      <motion.div
        className="basis-[80%]"
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <h2 className="font-bold text-md md:text-xl tracking-wide text-slate-700 dark:text-blue-200">
          {title}
        </h2>
        <h4 className="text-xs font-light">{issuedBy}</h4>
        <p className="text-xs md:text-sm mt-2">{description}</p>
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        {imageLink && (
          <Link
            href={imageLink}
            className="h-20 w-36 md:h-24 md:w-40 cursor-pointer ml-5 my-2 "
            target="_blank"
          >
            {imageLink && (
              <img
                className="basis-[20%] h-full w-full object-cover"
                src={imageLink}
              />
            )}
          </Link>
        )}
      </motion.div>
    </article>
  );
};

export default AwardCard;
