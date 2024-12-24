import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    name: "Isaw Vendor",
    location: "UM Matina Overpass",
    year: 2024,
  },
  {
    name: "Slave Vendor",
    location: "UM Matina Overpass",
    year: 2024,
  },
  {
    name: "Shabu Vendor",
    location: "Ilocos Norte",
    year: 2022,
  },
  {
    name: "Graphic Designer",
    location: "Bolton St Davao City",
    year: 2019,
  },
  {
    name: "Phone Snatcher",
    location: "Gmall Bajada",
    year: 2018,
  },
  {
    name: "Washing Machine Technician",
    location: "Gmall Bajada",
    year: 2018,
  },
];

const Experience = () => {
  return (
    <div className="text-white bg-neutral-900 rounded-md border border-neutral-700 p-4 col-span-1 md:col-span-2 md:row-span-3 space-y-2">
      <h1 className="text-lg md:text-xl font-bold flex flex-row items-center gap-2">
        <BriefcaseBusiness size={16} className="text-neutral-500" />
        <span>Experience</span>
      </h1>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-2">
          <h1 className="font-semibold">{experience.name}</h1>
          <div className="text-xs flex flex-row items-center justify-between gap-1">
            <span>{experience.location}</span>
            <Badge
              variant="outline"
              className="text-[10px] text-white px-1.5 py-0.5"
            >
              {experience.year}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
