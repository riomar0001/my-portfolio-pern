import React from "react";
import { BriefcaseBusiness } from "lucide-react";

const About = () => {
  return (
    <div className="text-white bg-neutral-900 rounded-md border border-neutral-700 p-4 col-span-1 md:col-span-4 space-y-2 row-span-2">
      <h1 className="text-lg md:text-xl font-bold flex flex-row items-center gap-2">
        <BriefcaseBusiness size={16} className="text-neutral-500" />
        <span>About</span>
      </h1>
      <p className="text-sm text-foreground/70 leading-relaxed">
        I'm a full-stack software engineer specializing in developing solutions
        with Javascript, Python, and PHP. I work on projects including building
        modern websites, web applications, mobile apps, search engine
        optimization, digital marketing, and making code tutorials.
        <br />
        <br />
        I've helped startups and MSMEs grow and streamline their processes
        through software solutions. I've also built a community of over 200,000
        developers sharing knowledge and mentorship.
      </p>
    </div>
  );
};

export default About;
