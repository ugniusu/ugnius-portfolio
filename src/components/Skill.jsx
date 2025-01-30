const Skill = ({ skill }) => {
  const IconComponent = skill.icon;

  return (
    <li className="flex items-center gap-2 border border-primary-400 bg-accent-800 p-2 rounded-lg shadow-lg shadow-accent-950 transition-all z-10 hover:scale-110">
      <IconComponent color={skill.color} />
      <p className="text-white text-xs md:text-sm">{skill.skill}</p>
    </li>
  );
};

export default Skill;
