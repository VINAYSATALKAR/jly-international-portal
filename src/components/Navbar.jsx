import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AVP logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    { name: "Membership", path: "/membership" },
  ];

  const authLink = { name: "Sign In", path: "/auth" }; // 🔐 Auth route

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between bg-white shadow-md transition-all">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="JLY Logo" className="h-15" />
        <span className="text-blue-700 font-extrabold text-lg leading-tight font-montserrat">
          JLY INTERNATIONAL
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-6 text-blue-700 font-roboto font-semibold">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="hover:text-orange-500">
            {link.name}
          </Link>
        ))}
        <Link
          to={authLink.path}
          className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-orange-600 transition"
        >
          {authLink.name}
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className="lg:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="w-6 h-0.5 bg-blue-700"></span>
        <span className="w-6 h-0.5 bg-blue-700"></span>
        <span className="w-6 h-0.5 bg-blue-700"></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-6 text-blue-700 text-lg font-roboto font-semibold lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={authLink.path}
            onClick={() => setIsOpen(false)}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
          >
            {authLink.name}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
