import Link from "next/link";

const StackIntro = () => {
  return (
    <section className="flex justify-center px-4 pt-4 md:pt-16 pb-0 md:pb-2">
      <div className="w-full max-w-3xl bg-[#0d0d0d] text-green-400 font-mono text-sm p-6 rounded-lg shadow-md overflow-x-auto">
        {/* WHOAMI */}
        <div className="mb-4">
          <p>
            <span className="text-green-500">$</span> whoami
          </p>
          <p className="ml-4">Toshik Rathore — Frontend Developer 🛠️</p>
        </div>

        {/* TECH STACK */}
        <div className="mb-4">
          <p>
            <span className="text-green-500">$</span> tech stack
          </p>
          <p className="ml-4">
            Next.js • TypeScript • JavaScript • Tailwind • Firebase • React •
            React-Native • Redux • GraphQL • Webpack • Parcel • Babel • AWS •
            TensorFlow • OpenCV • NumPy..
          </p>
        </div>

        {/* ABOUT */}
        <div className="mb-4">
          <p>
            <span className="text-green-500">$</span> about
          </p>
          <p className="ml-4">
            I’m a frontend engineer obsessed with building high-performance,
            visually precise web interfaces that don’t just load fast — but{" "}
            <em className="italic text-green-300">feel fast</em>.
          </p>
          <p className="ml-4 mt-2">
            Want to know more about my skills, experiences and projects? Check
            out the extended{" "}
            <Link
              href="/about"
              className="underline hover:text-green-200 transition-colors"
            >
              README.md
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StackIntro;
