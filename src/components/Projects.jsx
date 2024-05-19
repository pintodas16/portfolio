import { useState } from "react";
import { projects } from "../utils/projects";
import Project from "./Project";
function Projects({ activeSection }) {
  const [tabStatus, setTabStatus] = useState("all");
  const handleStatus = (tabId) => {
    setTabStatus(tabId);
  };

  let sortProjects = projects.filter((project) => {
    if (tabStatus === "frontend") {
      return project.category === "frontend";
    } else if (tabStatus === "fullstack") {
      return project.category === "fullstack";
    } else {
      return true;
    }
  });
  return (
    <section
      className=""
      id="projects"
      // className={`${activeSection === "projects" && "mt-[80px]"}`}
    >
      {/* <!-- title  --> */}
      <div className="bg-zinc-100 flex gap-2 justify-center  items-center pt-16 pb-6 ">
        {/* <h5 className="font-semibold text-xl">Visit my projects</h5>
        <h3 className="font-semibold text-4xl md:text-5xl">Projects</h3> */}
        <span className="w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
        <h3 className="font-custom font-semibold text-3xl md:text-4xl lg:text-5xl">
          My Projects
        </h3>
        <span className="w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
      </div>

      {/* <!--projects  --> */}
      <div className=" bg-zinc-100">
        {/* <!-- container  --> */}
        <div className="max-w-7xl mx-auto p-4 md:px-8">
          {/* <!-- nav bar for projects  --> */}
          {/* <!-- container  --> */}
          <div className="">
            {/* <!-- flex-container  --> */}
            <div className="flex justify-center items-center pt-10 ">
              <div className="flex gap-8 border-2 border-blue-600 rounded-lg px-6 py-2 text-xl font-semibold uppercase">
                <div
                  className={` border-r-2 border-r-gray-300 pr-6 ${
                    tabStatus == "all" ? "text-gray-900" : "text-gray-300"
                  }`}
                >
                  <button
                    onClick={() => handleStatus("all")}
                    className=""
                    href=""
                  >
                    All
                  </button>
                </div>
                <div
                  className={`border-r-2 border-r-gray-300 pr-6  ${
                    tabStatus == "frontend" ? "text-gray-900" : "text-gray-300"
                  }`}
                >
                  {" "}
                  <button
                    onClick={() => handleStatus("frontend")}
                    className=""
                    href=""
                  >
                    Frontend
                  </button>
                </div>
                <div
                  className={`${
                    tabStatus == "fullstack"
                      ? "text-gray-900 transition-colors delay-50 "
                      : "text-gray-300"
                  }`}
                >
                  <button
                    onClick={() => handleStatus("fullstack")}
                    className=""
                  >
                    full Stack
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- project  --> */}
          <div className="mt-6 mb-6 transition-all delay-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">
              {sortProjects.map((project) => (
                <Project project={project} key={project.index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
