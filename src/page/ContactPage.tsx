import React from "react";
import ContactImage from "../component/ContactImage";
import ContactForm from "../component/ContactForm";
import ContactTab from "../component/ContactTab";
import ContactAction from "../component/ContactAction";

const ContactPage = () => {
  return (
    <>
      <ContactImage />
      <ContactForm />
      <ContactTab />
      <ContactAction />
    </>
  );
};

export default ContactPage;
