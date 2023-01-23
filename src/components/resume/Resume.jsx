import react from "react";
import "./resume.scss";
import Timeline from "../timeline/Timeline";
import experienceData from "../../data/experience.json";
import Certifications from "../certifications/Certifications";
import certificationData from "../../data/certifications.json";
function Resume() {
  return (
    <div className="resume">
      <div className="resume_container">
        <div className="resume_title">
          <p>Resume</p>
        </div>
        <div className="resume_subtitle">
          <p>
            I am sortware dev with more than 1 years of experience in developing
            innovative solutions that has helped clients and people
          </p>
        </div>
        <div className="timeline_section">
          <p className="title">Experience</p>
          {experienceData.map((item) => (
            <Timeline data={item} />
          ))}
        </div>
        <div className="certification_section">
          <p className="title">Certifications</p>
          <div className="certification_section_container">
            {certificationData.map((item) => (
              <Certifications data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
