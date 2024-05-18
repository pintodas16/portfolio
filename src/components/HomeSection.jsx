// import ImgTwo from "/assets/images/pinto_jpg.jpg";
// import Img from "/assets/images/pintoOne.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ImgFinal from "../../public/assets/images/pinto.jpg";
// import Img from "/assets/images/pintoTwo.png";
function HomeSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Front-end Developer", " JavaScript Developer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className=" w-full bg-slate-50 ">
      {/* <!-- container  -->  mt-16 md:mt-20 2xl:mt-24 mt-24 pb-12*/}
      <div className="max-w-7xl mx-auto p-4 md:px-8 pt-16 ">
        {/* <!-- flex container  --> */}
        <div className="flex flex-col-reverse gap-16 md:gap-20  md:flex-row justify-center items-center">
          {/* <!-- content  --> */}
          <div className=" flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold uppercase py-2">
                Welcome to my World !
              </p>
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl  text-gray-900 py-2">
                Hi, I&apos;m
                <span className="ml-2 text-4xl te md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl ">
                  <span className="px-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-400 relative inline-block italic ml-1 mr-2">
                    <span className="relative text-white">Pinto</span>
                  </span>
                  Das
                </span>
              </h1>
              <h2 className="text-3xl font-semibold md:font-bold md:text-3xl md:tracking-[-0.02em]  lg:text-4xl  text-gray-900 py-2 ">
                A{" "}
                <span
                  className="uppercase animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black"
                  ref={el}
                ></span>
              </h2>
              <p className="font-montserratAl text-lg font-mono max-w-3xl">
                My academic journey has equipped me with a strong foundation in
                programming and web development technologies. In my first two
                years of university life, I actively participated in online
                contests and solved around 400 problems with several online
                judges. I then switched to web development and studied the
                foundations of this field. In addition, I completed a few
                projects. These days, I primarily use React and Redux for
                front-end development, and troubleshooting issues as they arise.
                I have an insatiable curiosity for picking up new skills and
                finding practical solutions to issues.
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
          {/* <div>
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
          </div> */}
          {/* <div className="flex justify-center items-center relative w-[500px] h-[500px] border-2 border-blue-500">
            <img className=" h-full w-[500px] absolute z-20" src={Img} alt="" />
            <div className=" absolute top-50% left-50% z-10 w-[150px] h-[150px] bg-blue-100 rounded-full"></div>
            <div className="absolute z-5 bg-blue-200 w-[250px] h-[250px] rounded-full"></div>
          </div> */}

          <div className="flex justify-center items-center">
            <img
              src={ImgFinal}
              alt=""
              className="max-w-full h-auto border-[20px] border-white shadow-xl  rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeSection;

// className="ml-2 text-4xl te md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black"
