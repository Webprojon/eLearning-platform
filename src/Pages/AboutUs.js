import React from "react";
// Import Components
import AboutSection from "../Components/AboutSection";
import BenefitSection from "../Components/BenefitSection";
import FaqSection from "../Components/FaqSection";
// Animation Pages
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <BenefitSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
