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
          <p>EXPERIENCE</p>
        </div>
        <div className="resume_subtitle">
          <p>
            Here is a timeline of my professional journey as a developer, the
            projects that I have worked on , the impact my work has made and the
            certifications I have earned.
          </p>
        </div>
        <div className="timeline_section">
          <p className="title">Work History</p>
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
