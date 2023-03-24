import React from "react";
// Import Images
import homeIntro2 from "../img/home-intro2.jpg";
// Styles
import styled from "styled-components";
import { About, Description, Image } from "../Styles";

const BenefitSection = () => {
  return (
    <Benefits>
      <Description>
        <h2>High-Quality Learning System</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="a girl in labarotry" />
      </Image>
    </Benefits>
  );
};

// Styled

const Benefits = styled(About)`
  flex-direction: row-reverse;
  width: 95%;
  margin: 0 auto;
  h2 {
    color: #30bee1;
    margin: 0 0 0 4rem;
    width: 100%;
  }
  h3 {
    font-size: 1.2rem;
    padding: 0.8rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0 0 4rem;
    width: 100%;
    border-left: 5px solid #30bee1;
    &:hover {
      cursor: pointer;
      transition: all 0.2s linear;
      transform: translateY(-3px);
    }
  }
`;

export default BenefitSection;
