"use client";

import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Stacked",
    imageSrc: "/images/stacked-preview.png",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "A personal portfolio showcasing my work, skills, and contact in a smooth, terminal-inspired design.",
  },
  {
    title: "Nysaa Ecomm",
    imageSrc: "/images/nysaa-preview.png",
    techStack: ["Next.js", "Firebase", "Zustand"],
    description:
      "A scalable ecommerce app built with modern web technologies and seamless user experience.",
  },
  {
    title: "GrowthIQ Dashboard",
    imageSrc: "/images/growthiq-preview.png",
    techStack: ["React", "Chart.js", "Tailwind CSS"],
    description:
      "An analytics dashboard to visualize growth and performance metrics for SaaS products.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-10 bg-zinc-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
