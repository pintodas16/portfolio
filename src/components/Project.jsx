function Project({ project }) {
  return (
    <div className="group px-3 py-6 ">
      <div className="bg-white  border rounded-xl shadow-md hover:shadow-xl md:max-w-sm mx-auto">
        {/* <!-- image  --> */}
        <div className="p-4 overflow-hidden">
          <img className="rounded-lg" src="./images/pinto.jpg" alt="" />
        </div>
        {/* <!-- content  --> */}

        <div className="px-3 py-4">
          <div className="flex items-center  justify-between ">
            <h5 className="text-xl uppercase font-semibold py-2">
              {project.name}
            </h5>
            <div className="hidden transition-all group-hover:duration-100 group-hover:delay-100 group-hover:flex items-center gap-2">
              <span className="px-2 py-0.5 border border-blue-500 bg-gray-50 text-blue-600 hover:bg-blue-500 hover:text-gray-50 rounded-md text-lg  capitalize ">
                <i className="fa-brands fa-github"></i>
              </span>
              <span className="px-2 py-0.5 border border-blue-500 bg-gray-50 text-blue-600 hover:bg-blue-500 hover:text-gray-50 rounded-md text-lg  capitalize ">
                <i className="fa-solid fa-link"></i>
              </span>
            </div>
          </div>
          <p className="pt-4 ">
            A website for the content creators to get money from their
            followers.
          </p>

          {/* <!-- technologies  --> */}
          <div className=" py-6 flex justify-center flex-wrap gap-4">
            {/* <!-- single technologies  --> */}
            <div>
              <span className="px-2 py-1 rounded-lg uppercase border shadow-md">
                React js
              </span>
            </div>
            {/* <!-- single technologies  --> */}
            <div>
              <span className="px-2 py-1 rounded-lg uppercase border shadow-md">
                tailwindcss
              </span>
            </div>
            {/* <!-- single technologies  --> */}
            <div>
              <span className="px-2 py-1 rounded-lg uppercase border shadow-md">
                Redux
              </span>
            </div>
            {/* <!-- single technologies  --> */}
            <div>
              <span className="px-2 py-1 rounded-lg uppercase border shadow-md">
                javaScript
              </span>
            </div>
            {/* <!-- single technologies  --> */}
            <div>
              <span className="px-2 py-1 rounded-lg uppercase border shadow-md">
                Node.js
              </span>
            </div>
            {/* <!-- single technologies  --> */}
            <div>
              <span className="px-2 py-1 rounded-lg uppercase border shadow-md">
                express
              </span>
            </div>
            {/* <!-- single technologies  --> */}
            <div>
              <span className="px-2 py-1 rounded-lg uppercase border shadow-md">
                Mongodb
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
