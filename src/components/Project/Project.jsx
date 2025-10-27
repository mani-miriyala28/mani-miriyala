import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import "./Project.css";
import {
  ArrowRight,
  ArrowRightCircle,
  ChevronLeft,
  ChevronRight,
  CornerUpRight,
  ExternalLink,
  GitHub,
  List,
  Share,
} from "react-feather";
import { getProject } from "../SharedData";
import { useNavigate, useParams } from "react-router-dom";
import { li } from "framer-motion/client";
import { GitHubCalendar } from "github-contribution-calendar";
import {
  Donut,
  Dot,
  DotIcon,
  DotSquare,
  Link,
  ListIcon,
  LucideList,
} from "lucide-react";
const token = import.meta.env.VITE_API_GITHUB_ACCESS_TOKEN;

const Project = () => {
  const Navigate = useNavigate();
  const { setSelectedProject } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    const project = getProject(id);
    setSelectedProject(project);
  }, [id, setSelectedProject]);

  const project = getProject(id);

  if (!project) {
    return (
      <div className="project-page">
        <div className="project-not-found">Project not found</div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div
        className="see-all-projects"
        onClick={() => {
          setSelectedProject({});
          Navigate("/projects");
        }}
      >
        <ChevronLeft className="icon" /> See All Projects
      </div>
      <div className="project-topbar">
        <div className="project-name">{project.name}</div>
        <div className="project-buttons">
          {project.sourceURL && (
            <a href={project.sourceURL} target="_blank">
              {" "}
              <GitHub className="icon" /> Repository
            </a>
          )}
          {project.livePreviewURL && (
            <a href={project.livePreviewURL} target="_blank">
              Visit
            </a>
          )}
        </div>
      </div>
      <div className="project-overview">
        <div className="project-thumbnail">
          <img src={project.thumbnail} alt={project.name + "-thumbnail"} />
        </div>
        <div className="project-meta">
          <div className="project-description">
            <div className="overview-title">Description</div>
            <div className="overview-content">{project.description}</div>
          </div>
          <div className="project-type">
            <div className="overview-title">Project Type</div>
            {project.work && (
              <div className="overview-content">Professional</div>
            )}
            {!project.work && <div className="overview-content">Personal</div>}
          </div>
          <div className="project-tech-stack">
            <div className="overview-title">Tech Stack</div>
            <div className="overview-content">
              {project.techStack.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
          {project.livePreviewURL && (
            <div className="project-live-preview">
              <div className="overview-title">Domain</div>
              <a
                href={project.livePreviewURL}
                target="_blank"
                className="overview-content"
              >
                <Link className="icon" /> {project.livePreviewURL}
              </a>
            </div>
          )}
          {project.sourceURL && (
            <div className="project-source">
              <div className="overview-title">Source</div>
              <a
                href={project.sourceURL}
                target="_blank"
                className="overview-content"
              >
                <Link className="icon" /> {project.sourceURL}
              </a>
            </div>
          )}
        </div>
      </div>
      {project.name === "github-contribution-calendar" && (
        <GitHubCalendar
          username="mani-miriyala"
          token={token}
          theme="minecraft"
          background="transparent"
          cellSize="11"
          titleColor="white"
          fontSize="12"
          year="2024"
          // labelColor="white"
        />
      )}
      {(project.about || project.keyFeatures) && (
        <div className="project-details">
          {project.about && (
            <>
              <p className="project-details--title">About</p>
              <div className="project-about">{project.about}</div>
            </>
          )}
          {project.keyFeatures && (
            <>
              <p className="project-details--title">Key Features</p>
              <ul className="project-key-features">
                {project.keyFeatures?.map((feature, index) => (
                  <li key={index}>
                    <div className="dot"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Project;