import React from "react";
// Styled
import styled from "styled-components";
import { About } from "../Styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Can l learn programming from 0 on your platform?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                dolor?
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="How much do l have to pay per month?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                dolor?
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="Is it possible to pay in full in one go?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                dolor?
              </p>
            </div>
          </div>
        </Toggle>

        <Toggle title="If l buy the course, can my brother and l also study?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                dolor?
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    color: #ccc;
  }

  .question {
    padding: 1.5rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }

  .faq-line {
    background-color: #30bee0;
    height: 0.2rem;
    width: 100%;
    margin: 1rem 0rem;
  }
`;

export default FaqSection;
