"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { BeakerIcon } from "@heroicons/react/20/solid";

type Props = {};

export default function Header({}: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 flex justify-between max-w-5xl mx-auto">
      {/* LEFT SIDE OF HEADER */}
      <div className="flex flex-row items-center">
        {/* SOCIAL ICONS */}
        <SocialIcon
          url="https://www.facebook.com/jiayiiii.03"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/jiayiiii.03"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/jiayiiii.03"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-7">
          {theme === "dark" ? (
            <SunIcon className="text-orange-300 h-6 w-6" />
          ) : (
            <MoonIcon className="text-orange-300 h-6 w-6" />
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
      </div>
    </header>
  );
}
