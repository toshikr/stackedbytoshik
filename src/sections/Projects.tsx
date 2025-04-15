"use client";

import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Stacked",
    imageSrc: "/projects/stacked-preview.avif",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Redux-toolkit",
      "Vercel",
    ],
    description:
      "A personal portfolio showcasing my work, skills, and contact in a smooth, terminal-inspired design.",
    githubUrl: "https://github.com/toshikr/stackedbytoshik",
    liveUrl: "https://stacked.toshik.dev",
  },
  {
    title: "Rick & Morty Universe",
    imageSrc: "/projects/rick-and-morty-preview.avif",
    techStack: ["React.js", "Axios", "Styled Components", "AWS EC2"],
    description:
      "A dynamic web app exploring Rick & Morty characters and episodes using open APIs, with filters, debounce search, reusable atomic components, and live deployment on AWS EC2.",
    githubUrl: "https://github.com/toshikr/rick-and-morty-universe",
    liveUrl: "http://ec2-123-456-789.compute.amazonaws.com:3000",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-10 bg-zinc-950 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Projects
        </h2>
        <div className="space-y-20">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              {...project}
              direction={idx % 2 === 1 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
