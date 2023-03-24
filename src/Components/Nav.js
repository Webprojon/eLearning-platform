import React from "react";
import styled from "styled-components";
// React Router
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          e-learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "90%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/courses" ? "90%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contactus" ? "90%" : "0%" }}
          ></Line>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #383e47;
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    li {
      list-style: none;
      padding: 0rem 2rem;
      letter-spacing: 0.1rem;
      position: relative;
    }
  }

  #logo {
    font-weight: lighter;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
    font-family: "Silkscreen", cursive;
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  background-color: #30bee0;
  width: 0%;
  border-radius: 0.2rem;
  position: absolute;
  bottom: -70%;
  left: 7%;
`;

export default Nav;
