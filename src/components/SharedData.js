import ibm from "../assets/ibm-cert.png";
import edx from "../assets/edx-cert.png";
import fcc from "../assets/fcc-cert.jpeg";
import euphoriaCert from "../assets/euphoria-cert.jpeg";
import euphoria from "../assets/Euphoria.png";
import chatapp from "../assets/chatApp.png";
import mangastore from "../assets/mangastore.png";
import flappyBird from "../assets/flappyBird.png";
import iPodSimulator from "../assets/iPodSimulator.png";
import noteme from "../assets/noteme.png";
import etchasketch from "../assets/etchasketch.png";
import gcc from "../assets/gcc.png";
import pos from "../assets/pos.png";
import aws from "../assets/aws-logo.png";
import whozzat from "../assets/whozzat.png";
import floatify from "../assets/floatify.png";
import greatlearning from "../assets/great_learning.png";
import googleColud from "../assets/google-cloud.jpg"

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    logo: aws,
    issuedBy: "Amazon Web Services (AWS)",
    issuedOn: "Sep 2025",
    pinned: true,
    credential:"https://www.credly.com/badges/21c35b84-1c8b-4562-9825-23eb114ea7e9/public_url"
  },
  {
    title: "Java Fullstack certificate from Great Learning",
    logo: greatlearning,
    issuedBy: "Great Learning",
    issuedOn: "Sep 2024",
    pinned: true,
    credential:
      "https://www.mygreatlearning.com/certificate/SZNCKOLU",
  },
  {
    title:
      "Google Cloud Gen-AI L1, L2 & L3 Specialization Certificate",
    logo: googleColud,
    issuedBy: "Google Cloud",
    issuedOn: "Apr 2024",
    pinned: true,
    credential:
      "https://cert.diceid.com/cid/UyLYe36YIV",
  },
  {
    title: "Responsive Web Design",
    logo: fcc,
    issuedBy: "freeCodeCamp",
    issuedOn: "Dec 2023",
    credential:
      "https://freecodecamp.org/certification/fccd2e70ff6-c9e7-4f96-a523-e5aef8268e1c/responsive-web-design",
  },
];

const projects = [
  {
    name: "E-commerce Platform",
    description: "Full stack e-commerce solution with React and Node.js",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    thumbnail: mangastore,
    pinned: true,
    work: false,
    livePreviewURL: "https://example.com",
    sourceURL: "https://github.com/mani-miriyala/ecommerce",
    keyFeatures: [
      "User Authentication",
      "Shopping Cart",
      "Payment Integration",
      "Admin Dashboard",
      "Responsive Design",
    ],
    about: "A comprehensive e-commerce platform built with modern technologies.",
  },
  {
    name: "Task Management App",
    description: "Project management tool with real-time collaboration",
    techStack: ["React", "Firebase", "Material-UI"],
    thumbnail: noteme,
    pinned: true,
    work: false,
    livePreviewURL: "https://example.com",
    sourceURL: "https://github.com/mani-miriyala/task-manager",
    keyFeatures: [
      "Real-time updates",
      "Team collaboration",
      "Task tracking",
      "File sharing",
    ],
    about: "A modern task management application for teams.",
  },
  {
    name: "Chat Application",
    description: "Real-time messaging app with multimedia support",
    techStack: ["React", "Socket.io", "Node.js"],
    thumbnail: chatapp,
    work: true,
    livePreviewURL: "https://example.com",
    sourceURL: "https://github.com/mani-miriyala/chat-app",
    about: "A feature-rich chat application with real-time messaging capabilities.",
    keyFeatures: [
      "Real-time messaging",
      "File sharing",
      "Group chats",
      "User authentication",
    ],
  },
  {
    name: "Purchase Order System",
    description: "Purchase Order System with User, Vendor & Requisition Management and PO Generation",
    techStack: ["React", "MySQL", "Node.js", "Express.js", "CSS"],
    thumbnail: pos,
    work: true,
    livePreviewURL: "",
    sourceURL: "",
    about: "Designed to simplify and streamline business operations, this Purchase Order System provides an intuitive interface to manage users and requisitions efficiently.",
    keyFeatures: [
      "Authentication, database management, and user/requisition handling",
      "In-app notifications for inactivity and requisition deadlines",
      "Report generation",
      "Search users/requisitions",
      "PO receipt generation with taxation, terms and conditions",
      "Custom receipt template as per client's requirements",
    ],
  },
];

const getProject = (name) => {
  // Handle URL encoded names and find project
  const decodedName = decodeURIComponent(name || "");
  return (
    projects.find(
      (project) => 
        project.name.toLowerCase() === decodedName.toLowerCase() ||
        project.name.toLowerCase().replace(/\s+/g, "-") === decodedName.toLowerCase() ||
        project.name.toLowerCase().replace(/\s+/g, "") === decodedName.toLowerCase()
    ) || null
  );
};

export { certificates, projects, getProject };