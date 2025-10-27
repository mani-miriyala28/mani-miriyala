import React, { useEffect } from "react";
import PageWrapper from "../PageWrapper";
import Side from "../../components/Side";
import Main from "../../components/Main";
import ScrollToTop from "../../ScrollToTop";

const Contact = () => {
  return (
    <PageWrapper pageName="contact">
      <Main pageName="contact" />
      <Side />
    </PageWrapper>
  );
};

export default Contact;