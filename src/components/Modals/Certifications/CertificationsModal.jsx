import React from "react";
import ModalWrapper from "../ModalWrapper";
import { certificates } from "../../SharedData";
import { ExternalLink } from "react-feather";
import "../Modal.css";

const CertificationsModal = ({ setModalOpen }) => {
  return (
    <ModalWrapper title="Certifications" setModalOpen={setModalOpen}>
      <div className="certifications-container">
        {certificates.map((certificate, index) => (
          <div className="certificate" key={index}>
            <img src={certificate.logo} alt="" className="certificate-logo" />
            <div className="certificate-details">
              <div className="certificate-title">{certificate.title}</div>
              <div className="certificate-organization">
                {certificate.issuedBy}
              </div>
              <div className="certificate-issued-on">
                Issued {certificate.issuedOn}
              </div>
              {certificate.credential && (
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-credentials-link"
                >
                  Show Credential <ExternalLink className="icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </ModalWrapper>
  );
};

export default CertificationsModal;