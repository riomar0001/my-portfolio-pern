import React from "react";
import { FlaskConical } from "lucide-react";

const TechStack = () => {
  return (
    <div className="p-4 col-span-1 md:col-span-4 space-y-2 text-white bg-neutral-900 rounded-md border border-neutral-700">
      <h1 className="text-lg md:text-xl font-bold flex flex-row items-center gap-2">
        <FlaskConical size={16} className="text-neutral-500" />
        <span>Tech Stack</span>
      </h1>

      <span className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 border border-foreground/10">
        React
      </span>
    </div>
  );
};

export default TechStack;
