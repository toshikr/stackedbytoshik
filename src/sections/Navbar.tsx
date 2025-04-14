"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // If using lucide for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Logo */}
        <h1 className="text-xl font-semibold text-black">stackedbytoshik</h1>

        {/* Hamburger - visible on small screens */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-6 items-center text-gray-800">
          <Link href="/about" className="hover:text-green-600">
            About
          </Link>
          <a href="#projects" className="hover:text-green-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile nav links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-gray-800">
          <Link href="/about" className="hover:text-green-600">
            About
          </Link>
          <a href="#projects" className="hover:text-green-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
