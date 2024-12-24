import React from "react";
import { MapPin, Calendar, Mail } from "lucide-react";
import { Button } from "../ui/button";

const Heading = () => {
  return (
    <div className="text-white flex flex-row items-center gap-4 md:gap-6 mb-8">
      <img
        src="https://placehold.co/400"
        alt="profile photo"
        className="h-32 w-32 rounded-md"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-lg md:text-2xl font-bold">Mario Jr Inguito</h1>
        <p className="text-xs md:text-sm flex flex-row items-center gap-1">
          <MapPin size={16} /> <span>Governor Generoso, Davao Oriental</span>
        </p>
        <p className="text-sm md:text-base">Fullstack Web Developer</p>
        <div className="flex flex-row gap-2 md:gap-3">
          <Button className="h-7 md:h-8" variant="secondary">
            <Calendar />
            Schedule a Call
          </Button>
          <Button className="h-7 md:h-8 border border-neutral-500">
            <Mail />
            Send Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
