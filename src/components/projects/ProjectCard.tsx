"use client";

import Image from "next/image";
import { FC } from "react";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  techStack: string[];
  description: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  imageSrc,
  techStack,
  description,
}) => {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-zinc-300">
          {techStack.map((tech, idx) => (
            <span key={idx} className="bg-zinc-800 px-2 py-0.5 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
