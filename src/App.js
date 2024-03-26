import React, { useState, useEffect, } from "react";
import "./styles/App.css";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { Header, Home, About, Projects, Skills, Contact, Footer } from "./container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const delay = 1.5;
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    let timer = setTimeout(() => setLoading(true), delay * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  gsap.to(".scroll-container", {
    ease: 0.05,
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  });

  gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: ".scroll-container",
      start: "top 90%",
      end: "bottom 30%",
    },
  });

  return (
    <div className="app">
      {!loading ? (
        <Loader />
      ) : (

        <div className="portfolio" id="scroll-container" >
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default App;
