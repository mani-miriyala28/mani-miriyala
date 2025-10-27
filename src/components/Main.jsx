import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import AboutMe from "./About/AboutMe";
import TopProjects from "./TopProjects/TopProjects";
import { GitHubCalendar } from "github-contribution-calendar";
import ContactTab from "./ContactTab/ContactTab";
import { h1 } from "framer-motion/client";
import WIP from "./WIP/WIP";
const token = import.meta.env.VITE_API_GITHUB_ACCESS_TOKEN;
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";
import Project from "./Project/Project";
const my_theme = {
  noContributions: "#e91e6320",
  low: "#C2185B",
  moderate: "#E91E63",
  high: "#F06292",
  veryHigh: "#F8BBD0",
};
const pageContent = {
  overview: (
    <>
      <AboutMe />
      <TopProjects filter="work" />
      <TopProjects filter="pinned" />
      <Link className="see-more" to="/projects">
        See More <ChevronRight className="icon" />
      </Link>
      <GitHubCalendar
        username="mani-miriyala"
        token={token}
        theme="minecraft"
        background="#e91e6320"
        borderRadius=".6rem"
        cellSize="11"
        titleColor="white"
        fontSize="12"
        year={2025}
        customTheme={my_theme}
      />
    </>
  ),
  projects: (
    <>
      <TopProjects filter="work" />
      <TopProjects filter="all" />
    </>
  ),
  "project-details": (
    <>
      <Project />
    </>
  ),
  contact: <ContactTab />,
  blog: <WIP />,
};

const Main = ({ pageName }) => {
  return (
    <AnimatePresence>
      <motion.main
        key={pageName}
        initial={{ opacity: 0, y: "8vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-8vh" }}
        transition={{ duration: 0.3 }}
      >
        {pageContent[pageName] || null}
      </motion.main>
      ;
    </AnimatePresence>
  );
};

export default Main;