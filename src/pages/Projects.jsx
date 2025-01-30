import { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projects } from "../data/projects";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleProjects((prev) => [...prev, entry.target]);
        }
      });
    }, options);

    projectRefs.current.forEach((project) => observer.observe(project));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="flex h-full  text-accent-100">
      <Navigation />

      <div className="flex flex-col flex-1 mx-auto pt-24">
        <h1 className="text-xl xl:text-4xl font-bold text-center text-primary-400 mt-10">
          Things I&apos;ve built so far
        </h1>
        <section className="grid xl:grid-cols-2 gap-8 mt-10 w-1/2 mx-auto">
          {projects.map((project, index) => (
            <div
              ref={(el) => (projectRefs.current[index] = el)}
              key={project.id}
              className={`bg-accent-850 rounded-lg shadow-lg max-w-sm mx-auto transform transition-all duration-500 ease-out opacity-0 hover:-translate-y-2 ${
                visibleProjects.includes(projectRefs.current[index])
                  ? "opacity-100 translate-y-0"
                  : "translate-y-0"
              }`}
            >
              <Project project={project} className="flex flex-col" />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Projects;
