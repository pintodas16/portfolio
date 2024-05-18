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
      {/* <!-- container  --> */}
      {/* <!-- title  --> */}
      <div className="bg-slate-50 flex flex-col gap-3  items-center pt-16 pb-12 ">
        <h5 className="font-semibold text-xl">my skills</h5>
        <h3 className="font-semibold text-4xl md:text-5xl">Skills</h3>
      </div>
      {/* <!-- languages  --> */}
      <div className=" bg-zinc-100 py-12">
        {/* <!-- container  --> */}
        <div className="max-w-7xl mx-auto p-4 md:px-8">
          {/* <!-- language  --> */}
          <div className=" mb-6">
            <h3 className="pb-3 font-semibold text-xl uppercase">Languages</h3>
            <div className="grid md:grid-cols-4 gap-4  ">{languages}</div>
          </div>

          {/* <!-- framework  --> */}
          <div className="mb-6">
            <h3 className="pb-3 font-semibold text-xl uppercase">
              UI | FRAMEWORK | LIBRARY
            </h3>
            <div className="grid md:grid-cols-4 gap-4 ">{frameworks}</div>
          </div>
          {/* <!-- tool --> */}
          <div className="mb-6">
            <h3 className="pb-3 font-semibold text-xl uppercase">Tools</h3>
            <div className="grid md:grid-cols-4 gap-4 ">{tools}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
