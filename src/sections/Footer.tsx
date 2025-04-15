import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 px-8 py-6 bg-[#0e0e0e] text-sm text-gray-300 font-mono">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-col gap-8 md:gap-0 md:flex-row md:space-x-44">
        {/* Socials */}
        <div className="flex gap-6 pl-0 md:pl-8">
          <Link
            href="https://github.com/toshikr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-6 h-6 invert">
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </div>
          </Link>
          <Link
            href="https://linkedin.com/in/toshik-rathore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-6 h-6 invert">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </div>
          </Link>
          <Link href="mailto:tkkr1221@gmail.com">
            <div className="w-6 h-6 invert">
              <Image
                src="/icons/email.svg"
                alt="Email"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </div>

        {/* write-up */}
        <p className="text-left leading-relaxed max-w-xl text-gray-400">
          Loosely designed in{" "}
          <span className="text-purple-400 font-semibold">Figma</span> and coded
          in <span className="text-purple-400 font-semibold">VS Code</span>.
          Built with{" "}
          <span className="text-green-400 font-semibold">Next.js</span> and{" "}
          <span className="text-green-400 font-semibold">Tailwind CSS</span>,
          deployed via{" "}
          <span className="text-blue-400 font-semibold">Vercel</span>. Set in{" "}
          <span className="text-yellow-300 font-semibold">Inter</span> typeface.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
