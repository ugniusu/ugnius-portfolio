import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projects } from "../data/projects";

function Projects() {
  return (
    <main className="flex h-full text-accent-100">
      <Navigation />

      <div className="flex flex-col flex-1 mx-auto pt-24">
        <h1 className="text-xl xl:text-4xl font-bold text-center text-primary-400 mt-10">
          Things I&apos;ve built so far
        </h1>
        <section className="grid xl:grid-cols-2 gap-8 mt-10 w-1/2 mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-accent-850 rounded-lg shadow-lg max-w-sm mx-auto transform transition-all duration-500 ease-out opacity-100 hover:-translate-y-2"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
            >
              <Project project={project} className="flex flex-col" />
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Projects;
