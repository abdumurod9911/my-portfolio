import React from "react";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="BIZ HAQIMIZDA." text="Men yangi boshlang`ich Front-End Dasturchiman" />
      <AboutContent />
      <Fotter />
    </div>
  )
}

export default About;