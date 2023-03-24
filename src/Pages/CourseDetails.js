import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import courseState from "../courseState";
// Animation Pages
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const CourseDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(courseState);
  const [course, setCourse] = useState(null);

  // useEffect
  useEffect(() => {
    const currentCourse = courses.filter(
      (courseState) => courseState.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);
  return (
    <>
      {course && (
        <Details
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="laptop" />
          </Header>
          <Awards>
            {course.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} alt="developer" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: #fff;
`;
const Header = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 7rem;
`;

// Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const StyledAward = styled.div`
  padding: 3rem;
  letter-spacing: 0.2rem;
  h3 {
    font-size: 1.7rem;
    text-align: center;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background-color: #30bee1;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
    text-align: center;
  }
`;

export default CourseDetails;
