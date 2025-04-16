"use client";
import Image from "next/image";

type Tech = {
  name: string;
  logo: string;
};

const techstacks: Tech[] = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React", logo: "/logos/reactjs.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "GraphQL", logo: "/logos/graphql.svg" },
  { name: "HTML5", logo: "/logos/html5.svg" },
  { name: "CSS3", logo: "/logos/css3.svg" },
  { name: "Firebase", logo: "/logos/firebase.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Redux-Toolkit", logo: "/logos/redux.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
];

const chunkedStacks: Tech[][] = techstacks.reduce<Tech[][]>(
  (acc, _, i, arr) => {
    if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
    return acc;
  },
  []
);

const Techstack = () => {
  return (
    <section
      id="techstack"
      className=" py-8 md:py-20 px-4 md:px-10  text-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold p-8 text-center">
          Tech Stack
        </h2>

        <div className="flex overflow-x-auto relative scrollbar-hide">
          <div className="flex gap-6 animate-scroll-x py-12">
            {[
              ...chunkedStacks,
              ...chunkedStacks,
              ...chunkedStacks,
              ...chunkedStacks,
              ...chunkedStacks,
              ...chunkedStacks,
              ...chunkedStacks,
            ].map((pair, idx) => (
              <div key={idx} className="flex flex-col gap-12 min-w-[280px]">
                {pair.map((tech, i) => (
                  <div
                    key={i}
                    className={`relative group flex justify-center items-center ${
                      i === 1 ? "translate-x-36" : ""
                    }`}
                  >
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={96}
                      height={96}
                      className="hover:scale-150 transition-transform object-contain w-24 h-24"
                    />
                    <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techstack;
