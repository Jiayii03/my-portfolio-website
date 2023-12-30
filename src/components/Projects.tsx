import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row maw-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <ProjectCard
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1190778679572308048/image.png?ex=65a30a10&is=65909510&hm=fb1d44c00167353d42c343fccec32547e9b2ffdf2914324db34242cd8525c34d&"
          projectTitle="JavaFX Snake Game"
          description="Coursework for the module COMP2009: Developing Maintainable Software. Developed a JavaFX application that allows users to play the classic Snake game. Leveraged on object-oriented principle, MVC architecture and TestFX framework to ensure the code is maintainable and testable. Accessibility features such as keyboard navigation were implemented. Worked with Scenebuilder to design the GUI and Javadoc to document the code."
        />
        <ProjectCard
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1190780808445829150/image.png?ex=65a30c0c&is=6590970c&hm=63164c3a072b12c62827c6acfcca724d1c5bb9f8704e7bc7c42a1fafa8b4f692&"
          projectTitle="Full Stack Real-time Chat App"
          description="Built a full stack realtime chat app with NextJS 13. Used Upstash Redis as database, React and Tailwind CSS for the user interface and responsiveness, code written in TypeScript. Also developed friendship system to add, accept or deny friends, and instant real-time messaging. Users are authenticated using Google Authentication via next-auth library. Deployed on Vercel."
        />
        <ProjectCard
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1190787933632995398/image.png?ex=65a312af&is=65909daf&hm=036bfd3613a7e701d848c2aa18ac14ef96900a2667340cacdcd69b4646fcff26&"
          projectTitle="FastAPI Mail Sender"
          description="Developed a simple mail sender application in Python to ease the process of sending mass emails. Leveraged on FastApi and smtplib library to send emails. Users are able to customise the subject, content, attachment and recipients of the email. Secured and authenticated using Google App Password."
        />
      </div>

      <div className="w-full absolute top-[25%] h-[500px] left-0 bg-[#4e9dd9]/10 -skew-y-12" />
    </div>
  );
}

export default Projects;
