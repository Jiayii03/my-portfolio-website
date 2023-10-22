import React from "react";
import { SocialIcon } from "react-social-icons";
import {
  DarkModeOutlined,
  LightMode,
  LightModeOutlined,
} from "@mui/icons-material";

type Props = {};

export default function Header({}: Props) {


  return (
    <header className="sticky top-0 flex justify-between max-w-7xl mx-auto">
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

      {/* RIGHT SIDE OF HEADER */}
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
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
    </header>
  );
}
