import Img from "../assets/images/pinto.jpg";
function HomeSection() {
  return (
    <section
      id="about"
      className="border border-yellow-500 w-full bg-gray-100 "
    >
      {/* <!-- container  -->  mt-16 md:mt-20 2xl:mt-24*/}
      <div className="max-w-7xl mx-auto p-4 md:px-8 mt-24 pb-12">
        {/* <!-- flex container  --> */}
        <div className="flex flex-col-reverse gap-12  md:flex-row justify-center items-center">
          {/* <!-- content  --> */}
          <div className="max-w-3xl flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold uppercase">
                Welcome to my World !
              </p>
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl  text-gray-900">
                Hi, I&apos;m Pinto Das
              </h1>
              <h2 className="text-3xl font-semibold md:font-bold md:text-3xl md:tracking-[-0.02em]  lg:text-4xl  text-gray-900">
                A Web Developer
              </h2>
              <p className="text-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, tempore fugiat odio reiciendis modi quasi dolor
                beatae nemo doloribus minima quos ad natus omnis laudantium
                voluptatem dignissimos minus, labore praesentium Lorem ipsum
                dolor sit amet consectetur, adipisi
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-location-dot"></i>
                <p className="text-base text-normal">Sylhet,Bangladesh</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="block h-2 w-2 rounded-full bg-green-400 animate-ping"></span>
                <p className="text-base text-normal">
                  Available for new projects
                </p>
              </div>
            </div>
          </div>
          {/* <!-- image  --> */}
          <div>
            <div className="relative w-[340px] h-[320px] ">
              <div className="">
                <img
                  className="absolute bottom-6 left-6  z-10  w-[340px] h-[320px]  rounded-xl md:left-0 md:bottom-0 "
                  src={Img}
                  alt=""
                />
              </div>

              <div className="absolute md:bottom-6 md:left-6 w-[340px] h-[320px] bg-blue-600 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeSection;
