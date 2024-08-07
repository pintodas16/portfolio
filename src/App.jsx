import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Others from "./components/Others.jsx";
import ProblemSolving from "./components/ProblemSolving";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Store active section ID
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    scroll.scrollTo({
      id: sectionId,
      duration: 300,
      smooth: true,
    });
  };

  const handleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <>
      <Header
        showMobileNav={showMobileNav}
        onHandleMobileNav={handleMobileNav}
        onScrollToSection={scrollToSection}
      />
      <HomeSection activeSection={activeSection} />
      <Skills activeSection={activeSection} />
      <ProblemSolving activeSection={activeSection} />
      <Projects activeSection={activeSection} />
      <Others activeSection={activeSection} />
      {/* <Recommendation activeSection={activeSection} /> */}
      <ContactUs />
      <Footer />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
}

export default App;
