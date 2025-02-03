import { motion } from "framer-motion";

const Skill = ({ skill }) => {
  const IconComponent = skill.icon;

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.07 * id,
      },
    }),
  };

  return (
    <motion.div
      initial={fadeInAnimationVariants.initial}
      animate={fadeInAnimationVariants.animate(skill.id)}
      custom={skill.id}
      className="z-10"
    >
      <li className="flex items-center gap-2 border border-primary-400 bg-accent-800 p-2 rounded-lg shadow-lg shadow-accent-950 transition-all z-10 hover:scale-110">
        <IconComponent color={skill.color} />
        <p className="text-white text-xs lg:text-lg">{skill.skill}</p>
      </li>
    </motion.div>
  );
};

export default Skill;
