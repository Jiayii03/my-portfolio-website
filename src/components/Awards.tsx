import React from "react";
import AwardCard from "./AwardCard";

function Awards() {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col gap-y-5 max-w-5xl justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl">
        Awards
      </h3>

      <div className="w-full flex flex-col gap-y-5 xl:gap-y-6 max-w-5xl justify-center mx-auto items-center mt-24">
        <AwardCard
          title="FOSE Dean's Excellence Scholarship Award 2023"
          issuedBy="The University of Nottingham"
          description="Awarded the Dean’s Excellence Scholarship (DES), which is only eligible to top achieving students within the top 2% of the school population."
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1188453921866383441/ARSM_diploma_certificate-1.png?ex=659a94f7&is=65881ff7&hm=109faf04d150ddd36f928faa38b5d42bd01b38ca38abeb1de5d8e96b9f538d0b&"
        />
        <AwardCard
          title="1st Prize: Web Design Competition"
          issuedBy="Taylor's University School of Computer Science"
          description= "Worked in a team, successfully designed a conceptual website for an online bakery store. Used HTML, CSS, JavaScript, Bootstrap and PHP."
          imageLink="https://cdn.discordapp.com/attachments/1165641776011427900/1188450095105060915/1674618430714.png?ex=659a9167&is=65881c67&hm=9eab2b86962a9022d6566c8257c0bb446c1e60276fc26963f87fdb8785cab3b8&"
        />
        <AwardCard
          title="
          JPA Full Scholarship"
          issuedBy="The Government of Malaysia"
          description="Passed the interview conducted by government officials and secured a three-year full scholarship to enroll myself in University of Nottingham."
          imageLink=""
        />
      </div>
    </div>
  );
}

export default Awards;
