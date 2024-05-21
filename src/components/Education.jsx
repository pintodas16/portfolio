import universityImg from "/assets/images/education and training/Leading_University_Logo.png";
import school from "/assets/images/education and training/Madhabpur pilot high school.jpg";
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
              <h4 className="text-black text-xl md:text-2xl  py-1 font-custom font-medium">
                Leading University
              </h4>
              <h5 className="text-black text-lg md:text-xl  py-1  font-custom font-normal">
                Bachelor of Science in Computer Science and Engineering
              </h5>

              <p className="text-base md:text-lg  font-custom font-medium ">
                January 2018 - June 2022
              </p>
              <p className="text-base md:text-lg font-custom font-normal">
                Sylhet, Bangladesh
              </p>
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
              <img className="h-16 md:h-28 w-24" src={collegeImg} alt="" />
            </div>
            <div>
              <h4 className="text-black text-xl md:text-2xl  py-1 font-custom font-medium ">
                Brindavan Govt College
              </h4>
              <h5 className="text-black text-lg md:text-xl  py-1 font-custom font-normal">
                {" "}
                Higher Secondary School
              </h5>
              <p className="text-base md:text-lg font-custom font-medium  ">
                July 2014 july 2014
              </p>
              <p className="text-base md:text-lg font-custom font-normal">
                Habiganj Bangladesh
              </p>
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
          <div className="flex gap-4">
            <div className="flex md:items-center ">
              <img
                className="h-16 md:h-22 w-24 rounded-xl"
                src={school}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-black text-xl md:text-2xl font-custom font-medium py-1">
                Madhabpur Pilot High School
              </h4>
              <h5 className="text-black text-lg md:text-xl  py-1 font-custom font-normal ">
                Secondary School Certificate
              </h5>
              <p className="text-base md:text-lg pt-2 font-custom font-medium">
                January 2010 - April 2014
              </p>
              <p className="text-base md:text-lg font-custom font-normal">
                Madhabpur Bangladesh
              </p>
            </div>
          </div>
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
