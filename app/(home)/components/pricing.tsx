import React from "react";
import Image from "next/image";

export const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto container">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl">
        One tool for your whole company. Free for teamy to try.
      </div>
      <p className="uppercase opacity-70">TRUSTED BY TEAMS AT</p>
      <div className="flex flex-row gap-4 mt-4 flex-wrap">
        {teams.map((team, index) => (
          <Image width={50} height={50} alt="image" key={index} src={team} />
        ))}
      </div>
    </div>
  );
};

const teams = ["/teams/1.svg", "/teams/2.svg", "/teams/3.svg", "/teams/4.svg"];
