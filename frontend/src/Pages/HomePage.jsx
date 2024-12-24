import React from "react";
import Heading from "@/components/home/Heading";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import TechStack from "@/components/home/TechStack";

const HomePage = () => {
  return (
    <div className="bg-black h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Heading />

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-5 gap-2">
          <About />
          <Experience />
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
