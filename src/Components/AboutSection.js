import React from "react";
// import Images
import homeIntro from "../img/home-intro.jpg";
// import Styled Components
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../Styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>Be educated so that</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              you <span>can change</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>the world.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          An educated mind can teach many. An educated is better than empty one.
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="man reading a book" />
      </Image>
    </About>
  );
};

export default AboutSection;
