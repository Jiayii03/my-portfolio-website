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
          imageLink="https://i.imgur.com/pg7lhmA.png"
        />
        <AwardCard
          title="1st Prize: Web Design Competition"
          issuedBy="Taylor's University School of Computer Science"
          description="Worked in a team, successfully designed a conceptual website for an online bakery store. Used HTML, CSS, JavaScript, Bootstrap and PHP."
          imageLink="https://i.imgur.com/t2SqZje.png"
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
