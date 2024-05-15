import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Others from "./components/Others.jsx";
import ProblemSolving from "./components/ProblemSolving";
import Projects from "./components/Projects";
import Recommendation from "./components/Recommendation.jsx";
import Skills from "./components/Skills";

function App() {
  const [activeSection, setActiveSection] = useState(""); // Store active section ID
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    scroll.scrollTo({
      id: sectionId,
      duration: 300,
      smooth: true,
    });
  };
  return (
    <>
      <Header onScrollToSection={scrollToSection} />
      <HomeSection activeSection={activeSection} />
      <Skills activeSection={activeSection} />
      <ProblemSolving activeSection={activeSection} />
      <Projects activeSection={activeSection} />
      <Others activeSection={activeSection} />
      <Recommendation activeSection={activeSection} />
      <Footer />
    </>
  );
}

export default App;
