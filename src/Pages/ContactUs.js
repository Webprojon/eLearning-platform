import React from "react";
import styled from "styled-components";
// Animation Pages
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const ContactUs = () => {
  return (
    <Contact
      className="contact"
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <h2>
        get in <span>touch</span>
      </h2>
      <Form>
        <form>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="off"
              placeholder="first name"
            />
          </div>
          <div>
            <input
              type="text"
              id="secondName"
              name="secondName"
              autoComplete="off"
              placeholder="second name"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="password"
            />
          </div>
          <div>
            <input
              type="number"
              id="number"
              name="number"
              autoComplete="off"
              placeholder="number"
            />
          </div>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              autoComplete="off"
              placeholder="city"
            />
          </div>
        </form>
        <div className="btns">
          <div>
            <label htmlFor="term">Privacy Policy</label>
            <input type="checkbox" name="checkbox" id="checkbox" />
          </div>
          <button className="cancel btn">Cancel</button>
          <button className="submit btn">Submit</button>
        </div>
      </Form>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  width: 90%;
  height: 80vh;
  margin: 2rem auto;
  h2 {
    text-align: center;
    color: #ccc;
    text-transform: capitalize;
    font-weight: lighter;
    span {
      color: #30bee0;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

const Form = styled.div`
  form {
    width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    input {
      margin: 1.2rem 1rem;
      padding: 0.7rem 5rem 0.7rem 1rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      border: 1px solid #30bee0;
      font-size: 0.9rem;
      outline: none;
      color: #ccc;
      background-color: transparent;
      border-radius: 0.2rem;
      &::placeholder {
        color: #ccc;
      }
      &:focus {
        transition: all 0.2s linear;
        box-shadow: 1px 2px #30bee0;
      }
    }
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(26, 56, 105);
    border-radius: .2rem;
    width: 57%;
    margin: 1rem auto;
    padding: 1rem 2rem;
    &:hover {
      cursor: pointer;
      border:1px solid #30bee0;
      transition: all .3s linear;
    }
    div {
      label {
      padding: 0 .5rem;
      color: #ccc;
      font-size:1.3rem;
      }
     input {
      outline:none;
      &:hover {
        cursor: pointer;
      }
     }
     }
   
    .btn {
      border-radius: 0.2rem;
      margin: 0 1rem;
      padding: 0.6rem 2rem;
      letter-spacing: 0.1rem;
      border: 1.4px solid #30bee0;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
          rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
          rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
          rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
          rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
          rgba(0, 0, 0, 0.09) 0px 32px 16px;
      }
    }
    .submit {
    }
    .cancel {
      &:hover {
        background-color: red;
        color: #000;
        border: 1.4px solid red;
    }
  }
`;

export default ContactUs;
