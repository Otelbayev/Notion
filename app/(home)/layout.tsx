import { ChildProps } from "@/types";
import React from "react";
import { Navbar } from "./components";

const HomeLayout = ({ children }: ChildProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
