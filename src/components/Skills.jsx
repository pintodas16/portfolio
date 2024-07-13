import { frameworkSkill, languageSkill, toolSkills } from "../utils/skills.js";
import Skill from "./Skill.jsx";
function Skills() {
  const languages = languageSkill.map((skill) => {
    return <Skill skill={skill} key={skill.index} />;
  });

  const frameworks = frameworkSkill.map((skill) => {
    return <Skill skill={skill} key={skill.index} />;
  });
  const tools = toolSkills.map((skill) => {
    return <Skill skill={skill} key={skill.index} />;
  });
  return (
    <section className="" id="skills">
      <div className=" bg-zinc-100 flex justify-center gap-2  items-center pt-16 pb-6 ">
        <span className=" w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
        <p className="font-custom font-semibold text-3xl md:text-4xl lg:text-5xl">
          Skills
        </p>
        <span className=" w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
      </div>
      {/* <!-- languages  --> */}
      <div className=" bg-zinc-100 py-12">
        {/* <!-- container  --> */}
        <div className="max-w-7xl mx-auto p-4 md:px-8">
          {/* <!-- language  --> */}
          <div className=" mb-6">
            <h3 className="pb-3 font-custom  font-semibold text-xl uppercase">
              Languages
            </h3>
            <div className="grid md:grid-cols-4 gap-4  ">{languages}</div>
          </div>

          {/* <!-- framework  --> */}
          <div className="mb-6">
            <h3 className="pb-3 font-custom font-semibold text-xl uppercase">
              UI | FRAMEWORK | LIBRARY
            </h3>
            <div className="grid md:grid-cols-4 gap-4 ">{frameworks}</div>
          </div>
          {/* <!-- tool --> */}
          <div className="mb-6">
            <h3 className="pb-3 font-custom font-semibold text-xl uppercase">
              Tools
            </h3>
            <div className="grid md:grid-cols-4 gap-4 ">{tools}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
