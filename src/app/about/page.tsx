"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const About = () => {
  const paragraphs = [
    `I'm a frontend engineer obsessed with building high-performance, visually precise web interfaces that don’t just load fast — but feel fast. I thrive at the convergence of design scalable systems and low-level optimization, bridging the gap between delightful user experience and ruthless execution efficiency.`,

    `Currently, I engineer production-grade experiences using Next.js, TypeScript, and Tailwind CSS — focusing on identifying and resolving critical performance bottlenecks, implementing optimized hydration techniques for faster client-side rendering, and engineering modular, maintainable component systems that scale efficiently with evolving product demands.`,

    `Beyond the UI layer, I bring a strong foundation in data-intensive and AI-driven applications. In earlier phases of my journey, I developed projects in machine learning and deep learning — architecting neural networks and image recognition systems using TensorFlow, OpenCV, NumPy, and Pandas.`,

    `When I’m not optimizing render trees or refining interaction models, you’ll find me decoding RFCs, tracking emerging frontend primitives, or deep-diving through Product Hunt and engineering blogs on dev forums to stay at the edge of tech evolution.`,
  ];

  return (
    <section className="bg-[#0d0d0d] text-white px-6 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="border-l-4 border-green-400 pl-4 mb-10">
          <h1 className="text-4xl font-semibold text-green-400">About Me</h1>
        </div>

        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            className="mb-6 text-base leading-relaxed text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={paragraphVariants}
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black font-mono rounded-md hover:bg-green-400 transition-all focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
