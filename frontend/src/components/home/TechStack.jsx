import React from "react";
import { FlaskConical } from "lucide-react";

const techs = [
  "Javascript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Bisaya",
  "Tagalog",
  "English",
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Git",
  "Github",
  "Gitlab",
  "Bitbucket",
  "Jira",
];

const TechStack = () => {
  techs.map((tech, index) => console.log(tech));

  return (
    <div className="text-white bg-neutral-900 rounded-md border border-neutral-700 p-4 col-span-1 md:col-span-4 space-y-2">
      <h1 className="text-lg md:text-xl font-bold flex flex-row items-center gap-2">
        <FlaskConical size={16} className="text-neutral-500" />
        <span>Tech Stack</span>
      </h1>

      <div className="flex flex-wrap gap-1">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
