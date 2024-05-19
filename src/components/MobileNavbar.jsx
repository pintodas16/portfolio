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
      className={` ${
        showMobileNav ? "" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm`}
    >
      <div className="absolute right-0 w-2/3  h-full bg-white ">
        <div className="relative">
          <div onClick={onCloseMobileNav} className="absolute right-6 top-5 ">
            <i className="text-3xl bg-transparent fa-solid fa-xmark cursor-pointer"></i>
          </div>

          {/* <!-- option container  --> */}
          <div className="  bg-white py-10 px-6 h-full flex flex-col gap-4">
            <ul className=" mt-6 flex flex-col list-none  gap-4">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={() => handleClickOnNavLink("about")}
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={() => handleClickOnNavLink("skills")}
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
                >
                  skills
                </Link>
              </li>
              <li>
                <Link
                  to="problem-solving"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={() => handleClickOnNavLink("problem-solving")}
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
                >
                  problem solving
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={() => handleClickOnNavLink("projects")}
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
                >
                  project
                </Link>
              </li>
              <li>
                <Link
                  to="others"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={() => handleClickOnNavLink("others")}
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
                >
                  others
                </Link>
              </li>
              {/* <li>
                <Link
                  to="recommendation"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  onClick={() => handleClickOnNavLink("recommendation")}
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
                >
                  recommendation
                </Link>
              </li> */}
              <li>
                <Link
                  to="contact-me"
                  spy={true}
                  smooth={true}
                  offset={-110}
                  onClick={() => handleClickOnNavLink("contact-me")}
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
                >
                  Contact Me
                </Link>
              </li>
            </ul>

            {/* <button className="  px-4 py-1.5 border-2 border-blue-600 bg-blue-600 text-gray-50 font-medium rounded-xl transition-colors hover:bg-gray-100 hover:text-blue-600 active:bg-blue-700 active:text-gray-500">
              Download CV
            </button> */}
            <DownloadBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileNavbar;
