import React from "react";
import { FaFile, FaLayerGroup, FaPuzzlePiece } from "react-icons/fa";
import { FaHouse, FaUser, FaLinkedin, FaGithub } from "react-icons/fa6";
import NavItem from "./NavItem";
import UgniusCV from "../../public/cv/Ugnius-CV.pdf";

export default function Nav() {
  return (
    <nav
      className="flex flex-col justify-between items-center border-r border-accent-600 p-4 bg-accent-850 h-full"
      aria-label="Main Navigation"
    >
      <ul className="flex flex-col gap-5 px-2">
        <NavItem to="/" icon={FaHouse} label="Home" />
        <NavItem to="/about" icon={FaUser} label="About" />
        <NavItem to="/projects" icon={FaPuzzlePiece} label="Projects" />
        <NavItem to="/skills" icon={FaLayerGroup} label="Skills" />
      </ul>

      <ul className="flex flex-col gap-6 mt-5 items-center">
        <li>
          <a
            href="https://github.com/ugniusu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-100 text-2xl inline-flex items-center rounded-md transition-colors hover:text-accent-50"
          >
            <FaGithub className="text-accent-600 group-hover:text-primary-500" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ugnius-uscilas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-100 text-2xl inline-flex items-center rounded-md transition-colors hover:text-accent-50"
          >
            <FaLinkedin className="text-accent-600 group-hover:text-primary-500" />
          </a>
        </li>
        <li>
          <a
            href={UgniusCV}
            download="Ugnius-Uscilas.pdf"
            className="text-accent-100 text-2xl inline-flex items-center rounded-md transition-colors hover:text-accent-50"
          >
            <FaFile className="text-accent-600 group-hover:text-primary-500" />
          </a>
        </li>
        <li>
          <button className="bg-blue-500 text-accent-50 rounded-md text-lg px-4 py-2 hover:bg-blue-600 transition-colors">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
