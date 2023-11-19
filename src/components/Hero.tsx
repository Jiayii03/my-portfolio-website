"use client";

import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "HELLO, Introducing You to Jay.py",
      "A Dedicated Developer",
      "A Sporty Go-getter",
    ],
    loop: true,
    delaySpeed: 1800,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* Background circle */}
      <BackgroundCircles />
      <img
        src="https://cdn.discordapp.com/attachments/1165641776011427900/1166803413179318292/53263952300_de7409b42b_o.jpg?ex=654bd15b&is=65395c5b&hm=c730b5b4b4beee78f05d2ca9f575ae6c1079e27777e0b427060523672cac400e&"
        alt=""
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase mb-3 text-gray-500 text-opacity-80 tracking-[10px] ml-2 dark:text-slate-300/60">
          Computer Science Student
        </h2>
        <h1 className="text-lg lg:text-xl">
          <span className="font-victor tracking-wide bg-gray-50 bg-opacity-50 p-2 text-[#031E45] font-medium dark:bg-[#030F2B] dark:text-white">
            {text}
          </span>
          <Cursor cursorColor="#030636" />
        </h1>

        <div className="mt-1">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#education">
            <button className="heroButton">Education</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#awards">
            <button className="heroButton">Awards</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Hero;
