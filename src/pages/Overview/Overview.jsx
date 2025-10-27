import React from "react";
import Side from "../../components/Side";
import Main from "../../components/Main";
import "./Overview.css";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "../PageWrapper";
import ScrollToTop from "../../ScrollToTop";

const Overview = () => {
  return (
    <PageWrapper pageName="overview">
      <Side />
      <Main pageName="overview" />
    </PageWrapper>
  );
};

export default Overview;