import { motion } from "framer-motion";

const Skill = ({ skill }) => {
  const IconComponent = skill.icon;

  const listVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.li
      variants={listVariants} // Apply the animation variants
      initial="initial" // Initial state
      animate="animate" // Animate to this state
      whileHover={{ scale: 1.1 }} // Optional hover effect
      className="flex items-center gap-2 border border-primary-800 bg-accent-800 p-2 rounded-lg shadow-lg shadow-accent-950 transition-all z-10"
    >
      <IconComponent color={skill.color} />
      <p className="text-white">{skill.skill}</p>
    </motion.li>
  );
};

export default Skill;
