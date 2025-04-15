"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const ContactPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white text-gray-800 hover:text-green-600 transition cursor-pointer"
      >
        Contact
      </button>

      {/* Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-3 right-0 w-68 md:w-80 p-5 bg-zinc-900 border border-zinc-700 rounded-xl shadow-xl z-50 text-white"
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-zinc-400 hover:text-white transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <h4 className="text-lg font-semibold mb-3">Let’s Connect ✨</h4>
            <p className="text-sm text-zinc-400 mb-4">
              Drop me a line or check out my resume below.
            </p>

            {/* Socials */}
            <div className="flex gap-5 mb-3">
              <Link
                href="mailto:tkkr1221@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <Image
                  src="/icons/email.svg"
                  alt="Email"
                  width={22}
                  height={22}
                  className="invert hover:opacity-70 transition"
                />
              </Link>
              <Link
                href="https://github.com/toshikr"
                target="_blank"
                aria-label="GitHub"
              >
                <Image
                  src="/icons/github.svg"
                  alt="GitHub"
                  width={22}
                  height={22}
                  className="invert hover:opacity-70 transition"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/toshik-rathore"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="invert hover:opacity-70 transition"
                />
              </Link>
            </div>

            {/* Resume link */}
            <div className="text-sm">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-400 transition"
              >
                View Resume
              </Link>
              <a
                href="/resume.pdf"
                download
                className="hover:text-green-400 transition ml-2"
              >
                ⬇️
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPopover;
