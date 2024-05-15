import { useState } from "react";
import Education from "./Education";
import Training from "./Training";
function Others() {
  const [state, setState] = useState("education");
  const handleState = (sectionName) => {
    setState(sectionName);
  };
  return (
    <section id="others" className="border border-red-600">
      {/* <!-- title  --> */}
      <div className=" flex flex-col gap-3  items-center mt-24 pb-12 ">
        <h5 className="font-semibold text-xl">My other info</h5>
        <h3 className="font-semibold text-4xl md:text-5xl">others</h3>
      </div>
      <div>
        {/* <!-- container  --> */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto p-4 md:px-8 ">
            {/* <!-- navbar for othres  --> */}
            <div className=" ">
              {/* <!-- flex-container  --> */}
              <div className="md:w-1/2 mx-auto ">
                <div className="flex justify-between gap-8 border rounded-lg px-16 py-2 text-xl font-semibold uppercase">
                  <div
                    className={`${
                      state == "education" ? "text-gray-900" : "text-gray-300"
                    }`}
                  >
                    <button
                      className=""
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
                      className=""
                      onClick={() => handleState("training")}
                    >
                      Training
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
