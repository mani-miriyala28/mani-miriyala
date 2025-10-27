import React, { useContext } from "react";
import Side from "../../components/Side";
import Main from "../../components/Main";
import "./ProjectDetails.css";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "../PageWrapper";
import ScrollToTop from "../../ScrollToTop";
import { Context } from "../../context/context";

const ProjectDetails = () => {
  const { selectedProject } = useContext(Context);
  return (
    <PageWrapper pageName="project-details">
      <Main pageName="project-details" />
    </PageWrapper>
  );
};

export default ProjectDetails;