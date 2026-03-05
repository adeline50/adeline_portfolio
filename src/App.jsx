import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState(1);

  const pages = [
    <Hero key="hero" />,
    <About key="about" />,
    <Skills key="skills" />,
    <Projects key="projects" />,
    <Contact key="contact" />,
  ];

  const handleNavigation = (index) => {
    setDirection(index > activePage ? 1 : -1);
    setActivePage(index);
  };

  return (
  <div className="h-screen w-screen overflow-hidden bg-black text-white flex flex-col">

    {/* NAVBAR */}
    <nav className="fixed top-0 left-0 w-full flex justify-center gap-8 py-6 z-50 bg-black/40 backdrop-blur-md">
      {["Home", "About", "Skills", "Projects", "Contact"].map(
        (item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`transition duration-300 ${
              activePage === index
                ? "text-yellow-400"
                : "text-white hover:text-yellow-300"
            }`}
          >
            {item}
          </button>
        )
      )}
    </nav>

    {/* SLIDES */}
    <div className="relative flex-1 overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activePage}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >
          {pages[activePage]}
        </motion.div>
      </AnimatePresence>
    </div>

    {/* FOOTER */}
    <Footer />

  </div>
);
}