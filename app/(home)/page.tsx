import React from "react";
import { Heros, Clients, Pricing } from "./components";

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heros />
        <Clients />
      </div>
      <Pricing />
    </div>
  );
};

export default HomePage;
