import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <ul className="flex gap-6">
      <li>
        <a
          href="https://github.com/ugniusu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-2xl hover:text-primary-500 transition-all"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ugnius-uscilas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-2xl hover:text-primary-500 transition-all"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/ugnius.uscilas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-2xl hover:text-primary-500 transition-all"
        >
          <FaFacebookF />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
