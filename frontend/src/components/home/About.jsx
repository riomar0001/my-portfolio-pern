import React from "react";
import { BriefcaseBusiness } from "lucide-react";

const About = () => {
  return (
    <div className="col-span-1 md:col-span-4 text-white bg-neutral-900 p-4 rounded-md flex flex-col space-y-4 border border-neutral-700">
      <h1 className="text-lg md:text-xl font-bold flex flex-row items-center gap-2">
        <BriefcaseBusiness size={16} className="text-neutral-500" />
        <span>About</span>
      </h1>
      <p className="text-sm text-foreground/70 leading-relaxed">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Fames nec cursus ad
        fusce penatibus integer mauris justo. Risus tristique maximus sem dui
        eget adipiscing erat. Primis tempor sem magna felis accumsan ante massa
        nunc.
      </p>
      <p className="text-sm text-foreground/70 leading-relaxed">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Fames nec cursus ad
        fusce penatibus integer mauris justo. Risus tristique maximus sem dui
        eget adipiscing erat. Primis tempor sem magna felis accumsan ante massa
        nunc.
        
      </p>
    </div>
  );
};

export default About;
