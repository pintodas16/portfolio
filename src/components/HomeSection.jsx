// import ImgTwo from "/assets/images/pinto_jpg.jpg";
// import Img from "/assets/images/pintoOne.png";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typed from "typed.js";
import ImgFinal from "/assets/images/pinto.jpg";
import PlaceholderImg from "/assets/images/placeholderImg.jpg";
// import Img from "/assets/images/pintoTwo.png";
function HomeSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Web Developer", " Competitive-Programmer"],
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
      <div className="max-w-7xl mx-auto p-4 md:px-8 pt-16 pb-16 ">
        {/* <!-- flex container  --> */}
        <div className="flex flex-col-reverse gap-16 md:gap-20  md:flex-row justify-center items-center">
          {/* <!-- content  --> */}
          <div className=" flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-custom font-semibold uppercase py-2">
                Welcome to my World !
              </p>
              <h1 className="text-4xl uppercase font-custom font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl  text-gray-900 py-2">
                Hi, I&apos;m
                <span className="ml-2 font-custom  text-4xl te md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl ">
                  <span className="px-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-400 relative inline-block italic ml-1 mr-2">
                    <span className=" relative text-white">Pinto</span>
                  </span>
                  Das
                </span>
              </h1>
              <h2 className="text-3xl uppercase font-custom font-semibold md:font-bold md:text-3xl md:tracking-[-0.02em]  lg:text-4xl  text-gray-900 py-2 ">
                A{" "}
                <span
                  className="uppercase animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black"
                  ref={el}
                ></span>
              </h2>
              <p className="font-custom text-lg font-normal max-w-3xl">
                I am a highly motivated computer science student and competitive
                programmer. HTML, CSS, JavaScript, and frameworks like React and
                Redux are my areas of expertise in web development. A history of
                creating aesthetically beautiful and responsive web apps.
                Passionate about expanding the possibilities of digital
                experiences and learning more about web development.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-location-dot animate-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black"></i>
                <p className="text-lg font-custom font-medium uppercase">
                  Sylhet, Bangladesh
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="block h-1.5 w-1.5 rounded-full  bg-blue-500 animate-ping"></span>
                <p className="text-lg font-custom font-medium uppercase">
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

          {/* <div className="flex justify-center items-center">
            <img
              src={ImgFinal}
              alt=""
              className="max-w-full h-auto border-[20px] border-white shadow-2xl  rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
            />
          </div> */}

          <div className="flex justify-center items-center">
            <div className="max-w-full h-auto">
              {/* <img
                src={ImgFinal}
                alt=""
                className="max-w-full h-auto border-[20px] border-white shadow-2xl  rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
              /> */}
              <LazyLoadImage
                alt={"pinto image"}
                src={ImgFinal} // use normal <img> attributes as props
                placeholderSrc={PlaceholderImg}
                effect="blur"
                className="max-w-full h-auto border-[20px] border-white shadow-2xl  rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30%] rounded-bl-[30%] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeSection;

// className="ml-2 text-4xl te md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black"
