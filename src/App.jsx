import { useState, useEffect } from "react";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
const App = () => {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])
  return (

    <>
      {/* {IsLoading ? (
        <Loader />
      ) : */}
        <div className="mx-auto max-w-7xl">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </div>
     
{/*  */}
    </>
  );
};

export default App;
