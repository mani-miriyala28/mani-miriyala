import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "../PageWrapper";
import Main from "../../components/Main";

const Blog = () => {
  return (
    <PageWrapper pageName="blog">
      <Main pageName="blog" />
    </PageWrapper>
  );
};

export default Blog;