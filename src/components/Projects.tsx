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
          imageLink="https://i.imgur.com/BTguUDN.png"
          projectTitle="JavaFX Snake Game"
          description="Coursework for the module COMP2009: Developing Maintainable Software. Developed a JavaFX application that allows users to play the classic Snake game. Leveraged on object-oriented principle, MVC architecture and TestFX framework to ensure the code is maintainable and testable. Accessibility features such as keyboard navigation were implemented. Worked with Scenebuilder to design the GUI and Javadoc to document the code."
        />
        <ProjectCard
          imageLink="https://i.imgur.com/5Re0CFO.png"
          projectTitle="Full Stack Real-time Chat App"
          description="Built a full stack realtime chat app with NextJS 13. Used Upstash Redis as database, React and Tailwind CSS for the user interface and responsiveness, code written in TypeScript. Also developed friendship system to add, accept or deny friends, and instant real-time messaging. Users are authenticated using Google Authentication via next-auth library. Deployed on Vercel."
        />
        <ProjectCard
          imageLink="https://i.imgur.com/W5x6fp0.png"
          projectTitle="FastAPI Mail Sender"
          description="Developed a simple mail sender application in Python to ease the process of sending mass emails. Leveraged on FastApi and smtplib library to send emails. Users are able to customise the subject, content, attachment and recipients of the email. Secured and authenticated using Google App Password."
        />
      </div>

      <div className="w-full absolute top-[25%] h-[500px] left-0 bg-[#4e9dd9]/10 -skew-y-12" />
    </div>
  );
}

export default Projects;
