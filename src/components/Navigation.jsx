import { useState, useEffect } from "react";
import { FaEnvelope, FaLayerGroup, FaPuzzlePiece } from "react-icons/fa";
import { FaHouse, FaUser } from "react-icons/fa6";
import NavItem from "./NavItem";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScrolled);

  return (
    <nav
      className={`flex justify-center items-center gap-10 p-4 fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-accent-700/80 backdrop-blur-md" : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <ul className="flex gap-8 text-accent-100">
        <NavItem to="/" icon={FaHouse} label="Home" />
        <NavItem to="/about" icon={FaUser} label="About" />
        <NavItem to="/projects" icon={FaPuzzlePiece} label="Projects" />
        <NavItem to="/skills" icon={FaLayerGroup} label="Skills" />
        <NavItem to="/contact" icon={FaEnvelope} label="Contact" />
      </ul>
    </nav>
  );
}
