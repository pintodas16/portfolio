function Skill({ skill }) {
  return (
    <div className=" flex items-center gap-4 px-4 py-2 border rounded-lg shadow-lg bg-gray-50">
      <img className="h-10 w-8 hover:animate-bounce" src={skill.src} alt="" />
      <p className="text-lg font-custom font-normal uppercase">{skill.name}</p>
    </div>
  );
}
export default Skill;
