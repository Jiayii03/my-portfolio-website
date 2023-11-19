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

      <h3 className="top-40 absolute uppercase tracking-[3px] text-gray-500 text-sm">
        Try hovering over a skill!
      </h3>

      <div className="grid grid-cols-4 gap-7 mx-9 mt-20">
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175595622288605214/nextjs-boilerplate-logo.png?ex=656bcdbd&is=655958bd&hm=d51583f70987f56984b445dd2e908dea87f64e77df5b44347b7464b5f7d0de04&" percentage="75%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175592286130819112/react_original_wordmark_logo_icon_146375.png?ex=656bcaa2&is=655955a2&hm=a6c5862e11363c86e21747439f006b1118aacf78900a3d9f5144e065ad1ad414&" percentage="80%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175592518931468329/nodejs-logo-FBE122E377-seeklogo.png?ex=656bcad9&is=655955d9&hm=13e590a18157a741aa4e708b3f410a095bd68f69f9cde0b2c27e62a4edd1d8aa&" percentage="80%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175590218833875035/python-logo.png?ex=656bc8b5&is=655953b5&hm=d3b498bff2b60bae7647bb85fab3fa7144e675bf4b1b63e09a9e659cfb2f85d1&" percentage="90%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175590504457580654/181_Java_logo_logos-512.png?ex=656bc8f9&is=655953f9&hm=e9c9f537b681099b0bcec659e897d1f56327ea9474d8190c7e87aa4d7cefb91d&" percentage="85%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175591098962427945/c_original_logo_icon_146611.png?ex=656bc987&is=65595487&hm=50a8a254634aa8835172b21088a4cebdec9222a4263ecc768df1ce1252c15711&" percentage="75%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175595296110157926/mariadb_logo_icon_170968.png?ex=656bcd70&is=65595870&hm=953602481ab3b9289c904d70ef07eec1955337fabfa4b157dbfd5c89e004fa59&" percentage="80%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175591760534188072/mysql_PNG9.png?ex=656bca25&is=65595525&hm=869cbdff2d18460e052d4a15116d04e02ac43631ce3e76b1a8e8862a85d0a9bd&" percentage="80%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175595803151188038/fastapi.png?ex=656bcde8&is=655958e8&hm=705617b775e0ece2450b41e52aaa79bd5289fc03dc16157d53fae5e013273bf8&" percentage="75%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175593133719965826/LINUX-LOGO.png?ex=656bcb6c&is=6559566c&hm=ab07d4890658651c3e82dbb0186dd03381a1a18c423d8e0c405e23112ddedaec&" percentage="70%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1175593362485682226/1915px-Tensorflow_logo.png?ex=656bcba3&is=655956a3&hm=864de367fd0778e30f093831bf7687f8a322e85925844387420c274333d8658d&" percentage="90%"/>
        <Skill imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1168215612644925601/Git-Icon-1788C.png?ex=65636992&is=6550f492&hm=525d688f10deec31e90472cf65283670f166fca0d20803b303c882f8be3bc159&" percentage="85%"/>
        
      </div>
    </motion.div>
  );
}

export default Skills;
