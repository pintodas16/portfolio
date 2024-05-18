import universityImg from "/assets/images/education and training/Leading_University_Logo.png";
import collegeImg from "/assets/images/education and training/brindavan govt college.png";

function Education() {
  return (
    <div className=" mt-12 w-full gap-4 md:gap-0 grid grid-cols-9 md:px-2 md:py-12">
      <div
        className="col-start-2 col-end-10 md:col-span-4 w-full h-full shadow-md hover:shadow-lg"
        style={{ overflow: "hidden", transform: "none" }}
      >
        <div className="w-full h-full bg-blue-50 rounded-md p-4 md:pl-4">
          <div className="flex gap-4 justify-center">
            <div className="flex md:items-center">
              <img className="h-16 md:h-22 w-24" src={universityImg} alt="" />
            </div>
            <div>
              <h1 className="text-black text-2xl font-medium py-1">
                Leading University
              </h1>
              <h2 className="text-black text-xl  py-1 ">
                Bachelor of Science in Computer Science and Engineering
              </h2>

              <p className="text-lg font-semibold ">January 2018 - June 2022</p>
              <p className="text-lg">Sylhet, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative row-start-1  md:col-start-5 md:col-span-1  w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gray-300"></div>
        <div className="absolute w-6 h-6 rounded-full bg-blue-600 z-1 text-gray-50 text-center">
          1
        </div>
      </div>
      <div className="md:col-span-4 w-full h-full"></div>
      <div className="md:col-span-4 w-full h-full"></div>
      {/* <!-- second  tab  --> */}
      <div className="relative col-start-1 col-end-2  md:col-start-5 md:col-end-6  w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gray-300"></div>
        <div className="absolute w-6 h-6 rounded-full bg-blue-600 z-1 text-gray-50 text-center">
          2
        </div>
      </div>
      <div
        className=" col-start-2 col-end-10 md:col-start-6 md:col-end-10 w-full h-full shadow-md hover:shadow-lg"
        style={{ overflow: "hidden", transform: "none" }}
      >
        <div className="w-full h-full bg-blue-100 rounded-md p-4 md:pl-4">
          <div className="flex gap-4 ">
            <div className="flex md:items-center ">
              <img className="h-38 w-28" src={collegeImg} alt="" />
            </div>
            <div>
              <h1 className="text-black text-2xl font-medium py-1 ">
                Brindavan Govt College
              </h1>
              <h2 className="text-black text-xl  py-1 ">
                {" "}
                Higher Secondary School
              </h2>
              <p className="text-lg font-semibold  ">July 2014 july 2014</p>
              <p className="text-lg">Habiganj Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- third tab  --> */}

      <div
        className="col-start-2 col-end-10 md:col-span-4 w-full h-full  shadow-md hover:shadow-lg"
        style={{ overflow: "hidden", transform: "none" }}
      >
        <div className="w-full h-full bg-blue-50 rounded-md p-4 md:pl-4">
          <div>
            <img src="" alt="" />
          </div>
          <h1 className="text-black text-2xl font-medium py-1">
            Madhabpur Pilot High School
          </h1>
          <h2 className="text-black text-xl  py-1  ">
            Secondary School Certificate
          </h2>
          <p className=" text-lg pt-2 font-semibold">
            January 2010 - April 2014
          </p>
          <p className="text-lg ">Madhabpur Bangladesh</p>
        </div>
      </div>
      <div className="relative row-start-4  md:row-start-3 md:col-start-5  w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gray-300"></div>
        <div className="absolute w-6 h-6 rounded-full bg-blue-600 z-1 text-gray-50 text-center">
          3
        </div>
      </div>
      <div className="md:col-span-4 w-full h-full"></div>
    </div>
  );
}
export default Education;
