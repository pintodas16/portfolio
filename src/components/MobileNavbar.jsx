import { useRef } from "react";
import { Link } from "react-scroll";
import DownloadBtn from "./DownloadBtn";
function MobileNavbar({ showMobileNav, onCloseMobileNav, onScrollToSection }) {
  // handle close modal when user click outside of the form
  const mobileNav = useRef();
  const handleCloseMobileNav = (e) => {
    if (e.target === mobileNav.current) {
      onCloseMobileNav();
    }
  };

  const handleClickOnNavLink = (sectionId) => {
    onScrollToSection(sectionId);
    onCloseMobileNav();
  };

  return (
    <div
      ref={mobileNav}
      onClick={handleCloseMobileNav}
      className={`mt-[65px] transform transition-transform duration-700 ${
        showMobileNav ? "translate-x-0" : "-translate-x-full"
      } fixed inset-0 z-0 w-full h-screen lg:hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-[60%] bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white bg-opacity-40"></div>

      <div className="relative py-10 px-6 flex flex-col gap-4 h-full">
        <ul className="flex flex-col justify-center items-center list-none gap-4">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => handleClickOnNavLink("about")}
              className="text-xl font-custom font-medium uppercase text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => handleClickOnNavLink("skills")}
              className="text-xl font-custom uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="problem-solving"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => handleClickOnNavLink("problem-solving")}
              className="text-xl font-custom uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Problem Solving
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => handleClickOnNavLink("projects")}
              className="text-xl font-custom uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="others"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => handleClickOnNavLink("others")}
              className="text-xl font-custom uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Others
            </Link>
          </li>
          <li>
            <Link
              to="contact-me"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => handleClickOnNavLink("contact-me")}
              className="text-xl font-custom uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <DownloadBtn />
      </div>
    </div>

    // <div
    //   ref={mobileNav}
    //   onClick={handleCloseMobileNav}
    //   className={`mt-[64px] transform transition-transform duration-700 ${
    //     showMobileNav ? "translate-x-0" : "-translate-x-full"
    //   } fixed inset-0 z-20 w-full h-screen bg-white backdrop-blur-sm md:hidden`}
    // >
    //   <div className="py-10 px-6 flex flex-col gap-4">
    //     <ul className="flex flex-col justify-center items-center list-none gap-4">
    //       <li>
    //         <Link
    //           to="about"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           onClick={() => handleClickOnNavLink("about")}
    //           className="text-xl  font-custom font-medium uppercase text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="skills"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           onClick={() => handleClickOnNavLink("skills")}
    //           className="text-xl  font-custom  uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
    //         >
    //           skills
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="problem-solving"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           onClick={() => handleClickOnNavLink("problem-solving")}
    //           className="text-xl font-custom  uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
    //         >
    //           problem solving
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="projects"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           onClick={() => handleClickOnNavLink("projects")}
    //           className="text-xl font-custom  uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
    //         >
    //           project
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="others"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           onClick={() => handleClickOnNavLink("others")}
    //           className="text-xl font-custom  uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
    //         >
    //           others
    //         </Link>
    //       </li>
    //       {/* <li>
    //             <Link
    //               to="recommendation"
    //               spy={true}
    //               smooth={true}
    //               offset={-80}
    //               onClick={() => handleClickOnNavLink("recommendation")}
    //               className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
    //             >
    //               recommendation
    //             </Link>
    //           </li> */}
    //       <li>
    //         <Link
    //           to="contact-me"
    //           spy={true}
    //           smooth={true}
    //           offset={-70}
    //           onClick={() => handleClickOnNavLink("contact-me")}
    //           className="text-xl font-custom  uppercase font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
    //         >
    //           Contact Me
    //         </Link>
    //       </li>
    //     </ul>

    //     {/* <button className="  px-4 py-1.5 border-2 border-blue-600 bg-blue-600 text-gray-50 font-medium rounded-xl transition-colors hover:bg-gray-100 hover:text-blue-600 active:bg-blue-700 active:text-gray-500">
    //           Download CV
    //         </button> */}
    //     <DownloadBtn />
    //   </div>
    // </div>
  );
}
export default MobileNavbar;
