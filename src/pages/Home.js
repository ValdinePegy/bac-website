import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SpecialtiesSection from "../components/SpecialtiesSection";
import CTASection from "../components/CTASection";

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
