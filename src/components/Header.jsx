import { useState } from "react";
import { Link } from "react-scroll";
import DownloadBtn from "./DownloadBtn";
import MobileNavbar from "./MobileNavbar";
function Header({ onScrollToSection }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header
      className={` sticky top-0 z-30 w-full border-b border-transparent bg-gray-100 max-md:border-gray-50 `}
    >
      <div className="w-full max-w-7xl mx-auto p-4 md:px-8  flex justify-between items-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          onClick={() => onScrollToSection("about")}
          className="cursor-pointer"
        >
          <h3 className="text-2xl md:text-3xl text-gray-900 font-bold tracking-[-0.02em]">
            &lt;PD /&gt;{" "}
          </h3>
        </Link>
        <ul className="hidden lg:flex list-none items-center gap-6 ">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              onClick={() => onScrollToSection("about")}
              className={`text-xl font-medium text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              onClick={() => onScrollToSection("skills")}
              className="text-xl font-medium text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="problem-solving"
              spy={true}
              smooth={true}
              onClick={() => onScrollToSection("problem-solving")}
              className="text-xl font-medium text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Problem Solving
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              onClick={() => onScrollToSection("projects")}
              className="text-xl font-medium text-gray-900 transition-all hover:text-blue-600 active:text-gray-600  cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="others"
              spy={true}
              smooth={true}
              onClick={() => onScrollToSection("others")}
              className="text-xl font-medium text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              others
            </Link>
          </li>
          <li>
            <Link
              to="recommendation"
              spy={true}
              smooth={true}
              onClick={() => onScrollToSection("recommendation")}
              className="text-xl font-medium text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              recommendation
            </Link>
          </li>
        </ul>

        {/* <button className=" hidden lg:flex justify-center items-center px-4 py-1.5 border-2 border-blue-600 bg-blue-600 text-gray-50 font-medium rounded-xl transition-colors hover:bg-gray-100 hover:text-blue-600 active:bg-blue-700 active:text-gray-50">
          Download CV
        </button> */}

        <DownloadBtn className="hidden lg:flex justify-center items-center" />

        {/* hamburger button */}
        <button
          onClick={handleMobileNav}
          id="menu-btn"
          className="block  lg:hidden focus:outline-none"
        >
          <i className="text-2xl fa-solid fa-bars"></i>
        </button>

        {/* <!-- mobile navigation  --> */}

        <MobileNavbar
          showMobileNav={showMobileNav}
          onCloseMobileNav={handleMobileNav}
        />
      </div>
    </header>
  );
}

export default Header;
