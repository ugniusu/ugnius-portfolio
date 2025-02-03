import { skills } from "../data/skills";
import Skill from "../components/Skill";
import Navigation from "../components/Navigation";
import Animation from "../components/Animation";
import HText from "../components/HText";

const Skills = () => {
  return (
    <main className="flex h-screen bg-accent-900 text-accent-100">
      <aside className="h-full bg-accent-850 z-10">
        <Navigation />
      </aside>

      <section className="flex flex-col justify-center items-center w-full px-5">
        <Animation />
        <HText>Skills</HText>
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
