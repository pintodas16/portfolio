import { useRef } from "react";
import DownloadBtn from "./DownloadBtn";

function MobileNavbar({ showMobileNav, onCloseMobileNav }) {
  // handle close modal when user click outside of the form
  const mobileNav = useRef();
  const handleCloseMobileNav = (e) => {
    if (e.target === mobileNav.current) {
      onCloseMobileNav();
    }
  };

  return (
    <div
      ref={mobileNav}
      onClick={handleCloseMobileNav}
      className={` ${
        showMobileNav ? "" : "hidden"
      } fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm`}
    >
      <div className="absolute right-0 w-1/2 h-full bg-white ">
        <div className="relative">
          <div onClick={onCloseMobileNav} className="absolute right-6 top-5 ">
            <i className="text-3xl bg-transparent fa-solid fa-xmark cursor-pointer"></i>
          </div>

          {/* <!-- option container  --> */}
          <div className="  bg-white py-10 px-6 h-full flex flex-col gap-4">
            <ul className=" mt-6 flex flex-col list-none  gap-4">
              <li>
                <a
                  href="#about"
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600"
                >
                  skills
                </a>
              </li>
              <li>
                <a
                  href="#problem-solving"
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600"
                >
                  problem solving
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600"
                >
                  project
                </a>
              </li>
              <li>
                <a
                  href="#others"
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600"
                >
                  others
                </a>
              </li>
              <li>
                <a
                  href="#recommendation"
                  className="text-xl font-medium text-gray-600 transition-all hover:text-blue-600 active:text-gray-600"
                >
                  recommendation
                </a>
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
