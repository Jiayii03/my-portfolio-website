import React from "react";
import { SocialIcon } from "react-social-icons";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  console.log(theme);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // console.log(mounted)
  /**
   * here, on the server side, mounted=false, which means the code will break and the server won't return the component below
   * however, on the client side, mounted=true, which means the client will carry on to render the component below
   */

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 p-5 flex justify-between max-w-5xl mx-auto z-20">
      {/* LEFT SIDE OF HEADER */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0, // means animate back to the default location
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5, // in seconds
        }}
        className="flex flex-row items-center "
      >
        {/* SOCIAL ICONS */}
        <SocialIcon
          url="https://www.facebook.com/jiayiiii.03"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-slate-100 rounded-lg dark:hover:bg-slate-800"
        />
        <SocialIcon
          url="https://www.instagram.com/j.yi_03/?hl=en"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-slate-100 rounded-lg dark:hover:bg-slate-800"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jia-yi-chau-4a12a621a/"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-slate-100 rounded-lg dark:hover:bg-slate-800"
        />
        <SocialIcon
          url="https://github.com/Jiayii03"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-slate-100 rounded-lg dark:hover:bg-slate-800"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="w-10 h-full hover:bg-slate-100 rounded-lg dark:hover:bg-slate-800"
        >
          {theme === "dark" ? (
            <SunIcon className="text-orange-200 h-6 w-6 mx-auto" />
          ) : (
            <MoonIcon className="text-blue-950 h-6 w-6 mx-auto" />
          )}
        </button>
        {/* RIGHT SIDE OF HEADER */}
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          {/* Theme toggle button here */}

          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          {/* everything written on tailwind is mobile-first, by default, it's hidden on mobile */}
          <p className="uppercase hidden md:inline-flex text-gray-400">
            Contact me
          </p>
        </div>
      </motion.div>
    </header>
  );
}
