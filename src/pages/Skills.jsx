import { skills } from "../data/skills";
import Skill from "../components/Skill";
import Animation from "../components/Animation";
import Navigation from "../components/Navigation";

const Skills = () => {
  return (
    <main className="flex h-screen bg-accent-900 text-accent-100">
      <aside className="h-full bg-accent-850 z-10">
        <Navigation />
      </aside>

      <section className="flex flex-col justify-center items-center w-[80%] px-5">
        <Animation />
        <h1 className="text-white text-center tracking-wider pt-12 mb-12 text-2xl z-10">
          Skills
        </h1>
        <div className="flex justify-center items-center w-full">
          <ul className="flex flex-wrap gap-6 max-w-xl">
            {skills.map((skill) => (
              <Skill skill={skill} key={skill.id} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Skills;
