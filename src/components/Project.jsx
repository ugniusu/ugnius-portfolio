import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Project({ project, className }) {
  return (
    <div className={className}>
      <div className="relative mb-4">
        <img
          src={project.image}
          alt={project.alt}
          className="rounded-t-lg object-cover w-full h-48 transition-all z-10"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-white text-xl font-semibold mb-2">
          {project.title}
        </h2>

        <p className="text-accent-100 text-xs md:text-sm opacity-80 mb-4">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((el) => (
              <p
                className="bg-accent-700 rounded-md px-2 text-xs md:text-sm hover:scale-110 transition-all"
                key={el}
              >
                {el}
              </p>
            ))}
          </div>

          <div className="flex justify-between items-center">
            {project.url === "" ? (
              ""
            ) : (
              <div className="flex gap-2">
                <FaLink className="text-accent-100" />
                <a
                  href={project.url}
                  target="_blank"
                  className="text-accent-100 text-xs md:text-sm font-medium hover:underline"
                >
                  Live Preview
                </a>
              </div>
            )}

            <div className="flex gap-2">
              <FaGithub className="text-accent-100" />
              <a
                href={project.github}
                target="_blank"
                className="text-accent-100 text-xs md:text-sm font-medium hover:underline"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
