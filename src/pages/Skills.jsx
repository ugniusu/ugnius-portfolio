import React from "react";
import { skills } from "../data/skills";
import Skill from "../components/Skill";
import Animation from "../components/Animation";
import Nav from "../components/Nav";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <main className="flex h-screen bg-accent-900 text-accent-100">
      <aside className="h-full bg-accent-850 z-10">
        <Nav />
      </aside>

      <section className="flex flex-col justify-center items-center w-[80%] px-5">
        <Animation />
        <h1 className="text-white text-center tracking-wider pt-12 mb-12 text-2xl">
          Skills
        </h1>
        <div className="flex justify-center items-center w-full">
          <motion.ul
            className="flex flex-wrap gap-6 max-w-xl"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {skills.map((skill) => (
              <Skill skill={skill} key={skill.id} />
            ))}
          </motion.ul>
        </div>
      </section>
    </main>
  );
};

export default Skills;
