
const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Logo */}
        <h1 className="text-xl font-semibold text-black">stackedbytoshik</h1>

        {/* Right side - Nav items */}
        <div className="space-x-6 flex items-center text-gray-800">
          <a href="#contact" className="hover:text-green-600">
            About
          </a>
          <a href="#projects" className="hover:text-green-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
