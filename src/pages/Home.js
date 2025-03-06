import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import SpecialtiesSection from "../components/Home/SpecialtiesSection";
import CTASection from "../components/Home/CTASection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecialtiesSection />
      <CTASection />
    </div>
  );
};

export default Home;
