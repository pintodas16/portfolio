import { Link } from "react-scroll";
import DownloadBtn from "./DownloadBtn";
import MobileNavbar from "./MobileNavbar";
import { useState, useEffect } from "react";
function Header({ onScrollToSection, onHandleMobileNav, showMobileNav }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 left-0 w-full bg-white z-30 transition-shadow duration-300 ${
        isScrolled ? "border-b border-gray-300 shadow-md" : ""
      }`}
    >
      <div className="w-full max-w-7xl mx-auto p-4 md:px-8  flex justify-between items-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={() => onScrollToSection("about")}
          className="cursor-pointer"
        >
          <h3 className="text-2xl font-custom font-bold md:text-3xl   tracking-[-0.02em] bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
            &lt;PD/&gt;{" "}
          </h3>
        </Link>
        <ul className="hidden lg:flex list-none items-center gap-6 ">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-120}
              onClick={() => onScrollToSection("about")}
              className={`text-sm font-custom font-medium uppercase text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer`}
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
              onClick={() => onScrollToSection("skills")}
              className="text-sm font-custom font-medium uppercase text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
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
              onClick={() => onScrollToSection("problem-solving")}
              className="text-sm font-custom font-medium uppercase text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
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
              onClick={() => onScrollToSection("projects")}
              className="text-sm font-custom font-medium uppercase text-gray-900 transition-all hover:text-blue-600 active:text-gray-600  cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="others"
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => onScrollToSection("others")}
              className="text-sm font-custom font-medium uppercase text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              others
            </Link>
          </li>
          {/* <li>
            <Link
              to="recommendation"
              spy={true}
              smooth={true}
              onClick={() => onScrollToSection("recommendation")}
              className="text-xl font-medium text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              recommendation
            </Link>
          </li> */}
          <li>
            <Link
              to="contact-me"
              spy={true}
              smooth={true}
              offset={-120}
              onClick={() => onScrollToSection("contact-me")}
              className="text-sm font-custom font-medium uppercase text-gray-900 transition-all hover:text-blue-600 active:text-gray-600 cursor-pointer"
            >
              Contact Me
            </Link>
          </li>
        </ul>

        {/* <button className=" hidden lg:flex justify-center items-center px-4 py-1.5 border-2 border-blue-600 bg-blue-600 text-gray-50 font-medium rounded-xl transition-colors hover:bg-gray-100 hover:text-blue-600 active:bg-blue-700 active:text-gray-50">
          Download CV
        </button> */}

        <DownloadBtn className="hidden lg:flex justify-center items-center" />

        {/* hamburger button */}

        <button
          id="menu-btn"
          onClick={onHandleMobileNav}
          className={` z-30 block lg:hidden hamburger ${
            showMobileNav ? "open" : ""
          }`}
          aria-expanded={showMobileNav ? "true" : "false"}
          aria-controls="menu"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* <!-- mobile navigation  --> */}

        <MobileNavbar
          showMobileNav={showMobileNav}
          onCloseMobileNav={onHandleMobileNav}
          onScrollToSection={onScrollToSection}
        />
      </div>
    </header>
  );
}

export default Header;
