import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./TopBar.css";
import { BookOpen, Grid, MessageSquare, MoreVertical } from "react-feather";
import { Context } from "../../context/context";

const TopBar = () => {
  const Navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectedProject, setSelectedProject } = useContext(Context);
  const hasSelectedProject = Object.entries(selectedProject).length;

  const navLinks = [
    {
      path: "/overview",
      label: "Overview",
      icon: BookOpen,
    },
    {
      path: hasSelectedProject
        ? `/project/${encodeURIComponent(selectedProject.name)}`
        : "/projects",
      label: hasSelectedProject
        ? `Projects / ${selectedProject.name}`
        : "Projects",
      icon: Grid,
      keepSelected: true, // Keep the project selected when navigating to this link
    },
    {
      path: "/contact",
      label: "Contact",
      icon: MessageSquare,
    },
    // {
    //   path: "/blog",
    //   label: "Blog",
    //   icon: Edit,
    // },
  ];

  const handleNavClick = (keepSelected) => {
    if (!keepSelected) {
      setSelectedProject({});
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setVisible(true);
      } else if (currentScrollY > prevScrollY) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={`topbar ${visible ? "" : "hidden"}`}>
      <nav>
        <div className="name">
          <h4 onClick={() => Navigate("/overview")}>Mani</h4>{" "}
          <div className="circle"></div>
        </div>
        <MoreVertical
          className="menu icon"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
          }}
        />
        <div className={`navLinks ${mobileMenuOpen ? "mobile" : ""}`}>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
              onClick={() => {
                handleNavClick(link.keepSelected);
                setMobileMenuOpen(false);
              }}
            >
              <link.icon className="icon" />
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default TopBar;