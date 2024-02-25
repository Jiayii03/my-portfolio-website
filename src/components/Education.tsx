import React from "react";
import EducationCard from "./EducationCard";

type Props = {};

function Education({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">
        Education
      </h3>

      <div className="w-full px-10 pt-24 mt-16 md:pt-28 xl:pt-16 flex space-x-8 overflow-x-scroll snap-x snap-mandatory">
        <EducationCard
          imageLink="https://i.imgur.com/UfkMrQw.png"
          headerName="BSc (Hons) Computer Science in AI"
          placeName="University of Nottingham, United Kingdom"
          skills={{
            python: "https://i.imgur.com/9PBkwTF.png",
            c: "https://i.imgur.com/hPBooMN.png",
            haskell: "https://i.imgur.com/EySugQn.png",
            git: "https://i.imgur.com/PCgFDSX.png",
          }}
          date="2022 - 2025"
          notes={[
            "Data Structure and Algorithms",
            "Databases and Interfaces",
            "Discrete Mathematics, Formal Reasoning",
          ]}
        />
        <EducationCard
          imageLink="https://i.imgur.com/hrSCsC5.png"
          headerName="Foundation in Computing"
          placeName="Taylor's University, Malaysia"
          skills={{
            html: "https://i.imgur.com/ah7E9H3.png",
            css: "https://i.imgur.com/D3dIxTh.png",
            javascript: "https://i.imgur.com/OQ8kc1W.png",
            sql: "https://i.imgur.com/FHAPSVN.png",
          }}
          date="2021 - 2022"
          notes={[
            "Web Programming",
            "Information Systems",
            "Introduction to Algorithms",
          ]}
        />
        <EducationCard
          imageLink="https://i.imgur.com/EcNFIEc.png"
          headerName="Sijil Pelajaran Malaysia (SPM)"
          placeName="Penang, Malaysia"
          skills={{
            chemistry:
              "https://i.imgur.com/HxscCCk.png",
            physics:
              "https://i.imgur.com/rhJAWWh.png",
            biology:
              "https://i.imgur.com/0JN9BMx.png",
            chinese:
              "https://i.imgur.com/yx6FpYu.png",
          }}
          date="2016 - 2020"
          notes={[
            "English, Chinese, Maly",
            "Chemistry, Biology, Physics",
            "Additional Mathematics",
          ]}
        />
      </div>
    </div>
  );
}

export default Education;
