import React from "react";
import Container from "../components/Layout/Container";
import Breadcrumb from "../components/Layout/Breadcrumb";
import InputBox from "../components/Layout/InputBox";
import Button from "../components/Layout/Button";

const Contact = () => {
  return (
    <Container>
      <Breadcrumb />
      <div className="w-full md:w-2/4">
        <h2 className="mb-10 text-4xl font-bold text-black">Fill up a Form</h2>
        <InputBox
          as="input"
          type="text"
          placeholder="Your name here"
          label="Name"
        />
        <InputBox
          as="input"
          type="email"
          placeholder="Your email here"
          label="Email"
        />
        <InputBox
          as="textarea"
          type="text"
          placeholder="Your message here"
          label="Message"
        />
        <Button title="Post" />
      </div>
    </Container>
  );
};

export default Contact;
