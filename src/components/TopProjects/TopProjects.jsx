import React, { useContext, useState } from "react";

import "./TopProjects.css";
import { ChevronRight, Code, Globe } from "react-feather";
import LazyImage from "../LazyImage";
import etchasketch from "../../assets/etchasketch.png";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { projects } from "../SharedData";
import { motion } from "framer-motion";

const TopProjects = ({ filter }) => {
  const Navigate = useNavigate();

  let filteredProjects;
  switch (filter) {
    case "pinned":
      filteredProjects = projects.filter((project) => project.pinned);
      break;
    case "work":
      filteredProjects = projects.filter((project) => project.work);
      break;
    case "all":
      filteredProjects = projects.filter((project) => !project.work);
      break;
  }

  const ProjectCard = ({ project }) => (
    <div
      className="project"
      onClick={() => {
        Navigate(`/project/${encodeURIComponent(project.name)}`);
      }}
    >
      <p className="project-title">
        {project.name}
        <span className="project--links">
          {project.livePreviewURL && (
            <a
              href={project.livePreviewURL}
              target="_blank"
              rel="noreferrer"
              title="Live Preview"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="icon" />
            </a>
          )}
          {project.sourceURL && (
            <a
              href={project.sourceURL}
              target="_blank"
              rel="noreferrer"
              title="Source Code"
              onClick={(e) => e.stopPropagation()}
            >
              <Code className="icon" />
            </a>
          )}
        </span>
      </p>
      <LazyImage src={project.thumbnail} alt={`${project.name} Thumbnail`} />
      <div className="project-details">
        <p className="project-description">{project.description}</p>
        <div className="project--tech-stack">
          {project.techStack.map((tech, index) => (
            <span className="tech" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="topProjects">
        <p className="projects--title">
          {filter === "pinned" && "📌 Top Personal Projects"}
          {filter === "all" && "Personal Work"}
          {filter === "work" && "👨🏻‍💻 Work Experience Highlights"}
        </p>
        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} key={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopProjects;