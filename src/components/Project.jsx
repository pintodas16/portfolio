function Project({ project }) {
  return (
    <div className="group px-3 py-6 ">
      <div className="bg-white  border rounded-xl shadow-md hover:shadow-xl md:max-w-sm mx-auto">
        {/* <!-- image  --> */}
        <div className="p-4">
          <div className="w-full h-64 overflow-hidden rounded-lg">
            <img
              className="h-full w-full rounded-lg transition ease-in-out delay-150 group-hover:scale-110  duration-300 "
              src={project.src}
              alt={project.name}
            />
          </div>
        </div>
        {/* <!-- content  --> */}

        <div className="px-3 py-4">
          <div className="flex items-center  justify-between ">
            <h5 className="font-custom text-xl uppercase font-semibold py-2">
              {project.name}
            </h5>
            <div className="hidden transition-all group-hover:duration-100 group-hover:delay-100 group-hover:flex items-center gap-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="px-2 py-0.5 border border-blue-500 bg-gray-50 text-blue-600 hover:bg-blue-500 hover:text-gray-50 rounded-md text-lg  capitalize "
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="px-2 py-0.5 border border-blue-500 bg-gray-50 text-blue-600 hover:bg-blue-500 hover:text-gray-50 rounded-md text-lg  capitalize "
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              )}
            </div>
          </div>
          <p className="font-custom pt-4 ">{project.description}</p>

          {/* <!-- technologies  --> */}
          <div className=" py-6 flex justify-center flex-wrap gap-4">
            {project?.technology.map((tech, index) => {
              return (
                <div key={index}>
                  <span className="font-custom font-light px-2 py-1 rounded-lg uppercase border border-gray-200 shadow-md">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
