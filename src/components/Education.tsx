import React from "react";
import EducationCard from "./EducationCard";

type Props = {};

function Education({}: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">
        Education
      </h3>

      <div className="w-full px-10 pt-24 md:pt-28 xl:pt-16 flex space-x-8 overflow-x-scroll snap-x snap-mandatory">
        <EducationCard
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1168210526233444362/UniversityofNottinghamUoN-logo.png?ex=6550efd5&is=653e7ad5&hm=50b9c8fe518f494c806c2e9eba507b84d736cb5906c83fd5045a5d324daac773&"
          headerName="BSc (Hons) Computer Science in AI"
          placeName="University of Nottingham, United Kingdom"
          skills={{
            "python": "https://cdn.discordapp.com/attachments/1165641776011427900/1168214519902900285/1200px-Python-logo-notext.png?ex=6550f38d&is=653e7e8d&hm=135b8d95195fc13b80e4777de8b4a93176fd2b04f9c9ae8ffedd982703abe8ed&",
            "java": "https://cdn.discordapp.com/attachments/1165641776011427900/1168214365808373860/png-clipart-java-programming-computer-programming-programming-language-android-coffee-jar-text-logo.png?ex=6550f369&is=653e7e69&hm=5b7d5b233342a10be655f659890b3177bec26d95196aa7e5757017cce5cfae84&",
            "c": "https://cdn.discordapp.com/attachments/1165641776011427900/1168214008965386260/1853px-C_Programming_Language.png?ex=6550f314&is=653e7e14&hm=6cc3fac019e3cf7eb7b68d3bbaf9d4c4b50da140cf06afe462be121780acff26&",
            "haskell": "https://cdn.discordapp.com/attachments/1165641776011427900/1168214971319070831/63064c5652d40eda2eb7a838_33ac2334.png?ex=6550f3f9&is=653e7ef9&hm=bf1f870d2105d5ab4bbafdb47b8dee0d626727c421054e84b60886ed59042b21&",
            "git": "https://cdn.discordapp.com/attachments/1165641776011427900/1168215612644925601/Git-Icon-1788C.png?ex=6550f492&is=653e7f92&hm=2c82217ced09d8acc79df9e983acaea4af90aeac548afacca4fa257b31b89d2e&",

          }}
          date="2022 - 2025"
          notes={["Data Structure and Algorithms", "Databases and Interfaces", "Discrete Mathematics, Formal Reasoning"]}
        />
        <EducationCard
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1168301539505475735/taylor-s-university-college-squarelogo-1428399291142-removebg-preview.png?ex=65514499&is=653ecf99&hm=f72bdc063e5529ebafd020c88c747b406abb8f3ba2c499fe866a55e620498fce&"
          headerName="Foundation in Computing"
          placeName="Taylor's University, Malaysia"
          skills={{
            "html": "https://cdn.discordapp.com/attachments/1165641776011427900/1168299353765589103/HTML5_Badge_512.png?ex=6551428f&is=653ecd8f&hm=d4854784919705550c5cbeac3f24fd8639f5b4932f3d013f5da59d2e2b7d378c&",
            "css": "https://cdn.discordapp.com/attachments/1165641776011427900/1168299713917890632/css-512.png?ex=655142e5&is=653ecde5&hm=46da5d234636ffec7ff83ce68b6ea490f79d45b1461947a01c0a240018152480&",
            "javascript": "https://cdn.discordapp.com/attachments/1165641776011427900/1168300837492228126/javascript-1.png?ex=655143f1&is=653ecef1&hm=7e70c1d17c892bbc86bfbb24d82f11506880cd2c6b5d6d2c559193eac29eb958&",
            "sql": "https://cdn.discordapp.com/attachments/1165641776011427900/1168299883770425354/62debc4fff3c6e4b8b5de8d3.png?ex=6551430e&is=653ece0e&hm=2d7ec256904eb703fec538ccc7953203ee6415ad533fb02957b63045055c8690&",
          }}
          date="2021 - 2022"
          notes={["Web Programming", "Information Systems", "Introduction to Algorithms"]}
        />
        <EducationCard
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1168301424359256145/JIT_SIN_NEW_LOGO-removebg-preview.png?ex=6551447d&is=653ecf7d&hm=5e489c235d09a8a9067ed2fc4ed8acaf4a1564b38f578613a5be32c4ccdfb510&"
          headerName="Sijil Pelajaran Malaysia (SPM)"
          placeName="Penang, Malaysia"
          skills={{
            "chemistry": "https://cdn.discordapp.com/attachments/1165641776011427900/1172688577193332746/kisspng-chemistry-encapsulated-postscript-chemistry-icon-5adc7af34b68c6-removebg-preview.png?ex=65613a58&is=654ec558&hm=e060b0d0aa48198fae1e7c29499e7ae0d73babf4b25547538b6436514976d055&",
            "physics": "https://cdn.discordapp.com/attachments/1165641776011427900/1172689146003869776/1915940.png?ex=65613adf&is=654ec5df&hm=794bea5f69a80e4966dcb942f6809b696d77ebaa338797f4d99665b434a8e645&",
            "biology": "https://cdn.discordapp.com/attachments/1165641776011427900/1172689855667519508/biology-human-heart-icon-cartoon-style-biology-human-heart-icon-cartoon-biology-human-heart-vector-icon-web-design-isolated-178535629-removebg-preview.png?ex=65613b89&is=654ec689&hm=cfe6856e28577162b44546308900a8ff3235b009029c04946e0460ca936a7c2a&",
            "chinese": "https://cdn.discordapp.com/attachments/1165641776011427900/1172690271813775440/happy-chinese-new-year-boy-cartoon-character-in-traditional-clothes-celebrate-png.png?ex=65613bec&is=654ec6ec&hm=e8b56c006c33f1b702004e4d8d70ed844345ca4efd515a30d59f2a1a166094c9&",
          }}
          date="2016 - 2020"
          notes={["English, Chinese, Maly", "Chemistry, Biology, Physics", "Additional Mathematics"]}
        />
      </div>
    </div>
  );
}

export default Education;
