import react from "react";
import "./resume.scss";
import Timeline from "../timeline/Timeline";

function Resume() {
  return (
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
        <Timeline />
      </div>
    </div>
  );
}

export default Resume;
