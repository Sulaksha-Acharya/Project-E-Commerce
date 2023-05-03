import React from "react";
import { Container } from "@mui/system";
import contactus from "../asset/contactus.jpg";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div>
      <Container>
        <img
          className="contactus"
          src={contactus}
          alt="img"
          width="100%"
          height={300}
        />
      </Container>
      <ContactForm />
    </div>
  );
};

export default Contact;
