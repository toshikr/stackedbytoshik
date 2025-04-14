import Link from "next/link";

const StackIntro = () => {
  return (
    <section className="flex justify-center px-4 pt-32 pb-12">
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
            Next.js • TypeScript • Tailwind • Firebase • React • Redux • GraphQL
            • AWS • Webpack • TensorFlow
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
            Want to know more about my skills, experience, and projects?
            <br />
            Check out my full
            <Link
              href="/about"
              className="inline-block m-2 px-2 py-[1px] bg-green-100 text-black font-mono rounded-full hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              About Page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StackIntro;
