function Skill({ skill }) {
  return (
    <div className=" flex items-center gap-4 px-4 py-2 border rounded-lg shadow-lg bg-gray-50 group cursor-pointer transition-all duration-300">
      <img
        className="h-8 w-8 rounded-lg transition-all duration-300 group-hover:animate-bounce"
        src={skill.src}
        alt=""
      />
      <p className="text-lg font-custom font-normal uppercase">{skill.name}</p>
    </div>
  );
}
export default Skill;
