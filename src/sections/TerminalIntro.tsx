const StackIntro = () => {
  return (
    <section className="flex justify-center px-4 pt-32 pb-12">
      <div className="w-full max-w-3xl bg-[#0d0d0d] text-green-400 font-mono text-sm p-6 rounded-lg shadow-md overflow-x-auto">
        <div className="mb-4">
          <p>
            <span className="text-green-500">$</span> whoami
          </p>
          <p className="ml-4">Toshik Rathore — Frontend Developer 🛠️</p>
        </div>

        <div className="mb-4">
          <p>
            <span className="text-green-500">$</span> tech stack
          </p>
          <p className="ml-4">
            Next.js • TypeScript • Tailwind • Firebase • React
          </p>
        </div>

        <div>
          <p>
            <span className="text-green-500">$</span> about
          </p>
          <p className="ml-4">
            Building fast, smooth UIs — one pixel at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StackIntro;
