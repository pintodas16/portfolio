import { useState } from "react";
import Education from "./Education";
import Training from "./Training";
function Others() {
  const [state, setState] = useState("education");
  const handleState = (sectionName) => {
    setState(sectionName);
  };
  return (
    <section id="others" className="bg-slate-50">
      {/* <!-- title  --> */}
      <div className=" flex  gap-2 justify-center  items-center px-4 md:px-0 pt-16 pb-6 ">
        {/* <h5 className="font-semibold text-xl">My other info</h5>
        <h3 className="font-semibold text-4xl md:text-5xl">others</h3> */}

        <span className="w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
        <h3 className="font-custom font-semibold text-3xl md:text-4xl lg:text-5xl">
          Others Info
        </h3>
        <span className="w-24 h-2 animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></span>
      </div>
      <div>
        {/* <!-- container  --> */}
        <div className="">
          <div className="max-w-7xl mx-auto p-4 md:px-8 ">
            {/* <!-- navbar for othres  --> */}
            <div className=" ">
              {/* <!-- flex-container  --> */}
              <div className="md:w-1/2 mx-auto  pt-10">
                <div className="flex justify-between gap-8 border-2 border-blue-600 rounded-lg px-16 py-2 text-xl font-semibold uppercase">
                  <div
                    className={`${
                      state == "education" ? "text-gray-900" : "text-gray-300"
                    }`}
                  >
                    <button
                      className="font-custom"
                      onClick={() => handleState("education")}
                    >
                      Education
                    </button>
                  </div>
                  <div
                    className={`${
                      state == "training" ? "text-gray-900" : "text-gray-300"
                    }`}
                  >
                    {" "}
                    <button
                      className="font-custom"
                      onClick={() => handleState("training")}
                    >
                      certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- education tab  --> */}

            {state == "education" ? <Education /> : null}
            {/* <!-- end of education tab  --> */}

            {/* <!-- training tab  --> */}
            {state == "training" ? <Training /> : null}
            {/* <!-- end of training tab  --> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Others;
