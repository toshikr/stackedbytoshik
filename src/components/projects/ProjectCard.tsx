"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  techStack: string[];
  description: string;
  direction?: "left" | "right";
  githubUrl?: string;
  liveUrl?: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  imageSrc,
  techStack,
  description,
  direction = "left",
  githubUrl,
  liveUrl,
}) => {
  return (
    <motion.div
      className={`flex flex-col-reverse lg:flex-row ${
        direction === "right" ? "lg:flex-row-reverse" : ""
      } items-center gap-8 md:gap-12 lg:gap-20`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Text */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-400">{description}</p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Image with Hover Actions */}
      <div className="w-full lg:w-1/2 group relative rounded-xl overflow-hidden border border-zinc-700 shadow-md">
        <div className="relative w-full h-56 sm:h-64 md:h-72">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {(githubUrl || liveUrl) && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap items-end justify-center gap-2 sm:gap-4 pb-4 px-4 text-center">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black text-sm rounded hover:bg-zinc-200 transition"
              >
                See on GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-zinc-900 text-white text-sm border border-white rounded hover:bg-white hover:text-black transition"
              >
                Live Site
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
