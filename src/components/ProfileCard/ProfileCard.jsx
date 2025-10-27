import React, { useState } from "react";
import profileImage from "../../assets/profile-image.jpeg";
import { GitHub, Linkedin, Mail, MapPin, ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";
import CV from "../../assets/CV.pdf";
import CertificationsModal from "../Modals/Certifications/CertificationsModal";
import { certificates } from "../SharedData";

const ProfileCard = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const Navigate = useNavigate();
  const socials = [
    {
      label: "Mani Miriyala",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/mani-miriyala/",
    },
    {
      label: "mani.miriyala@gmail.com",
      icon: Mail,
      link: "mailto:mani.miriyala@gmail.com",
    },
    {
      label: "mani-miriyala",
      icon: GitHub,
      link: "https://github.com/mani-miriyala",
    },
  ];

  const handleHireMeClick = () => {
    Navigate("/contact");
  };
  return (
    <div className="profileCard">
      <div className="hero">
        <img src={profileImage} alt="" id="profile-image" />
        <div className="title">
          <h2 id="name">
            Mani Miriyala
            <span className="pronouns">he / him</span>
          </h2>
          <p id="location">
            <MapPin className="icon" /> <span>AP, India</span>
          </p>
        </div>
      </div>
      <div className="description">Full Stack Developer</div>
      <div className="actions">
        <a href={CV} download="Mani_Miriyala.pdf">
          Resume
        </a>
        <p onClick={handleHireMeClick}>Hire me</p>
      </div>
      <div className="socials">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank">
            <social.icon className="icon" />
            {social.label}
          </a>
        ))}
      </div>
      <div className="certifications" onClick={() => setModalOpen(true)}>
        <p className="certifications--title">
          Certifications <ChevronRight className="icon" />
        </p>
        <div className="certificates">
          {certificates.map(
            (certificate, index) =>
              certificate.pinned && (
                <div className="certificate" key={index}>
                  <img src={certificate.logo} alt="" />
                </div>
              )
          )}
          <div className="viewRemainingCertificates">
            +{certificates.filter((certificate) => !certificate.pinned).length}
          </div>
        </div>
      </div>
      {ModalOpen && <CertificationsModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default ProfileCard;