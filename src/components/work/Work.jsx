import React, { useRef } from "react";
import "./work.scss";
import experienceData from "../../data/experience.json";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BusinessIcon from '@mui/icons-material/Business';

const TimelineItem = ({ job, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.div
      className={`timeline-item ${isInView ? 'expanded' : 'collapsed'}`}
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="card-glass">
          <div className="job-header">
            <div className="company-logo">
              <BusinessIcon fontSize="large" style={{ color: '#fff' }} />
            </div>
            <div className="job-info">
              <h2>{job.profile_name}</h2>
              <h3>{job.company_name}</h3>
              <span className="job-date">{job.timeline}</span>
            </div>
          </div>

          <motion.div
            className="job-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isInView ? 'auto' : 0,
              opacity: isInView ? 1 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="details-content">
              <p className="location">{job.location}</p>
              <ul className="experience-list">
                {job.experience.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {job.stack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

function Work() {
  const navigate = useNavigate();

  return (
    <div className="work-page-container">


      <motion.div
        className="work-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Work Experience</h1>
        <p>My professional journey.</p>
      </motion.div>

      <div className="work-timeline">
        <div className="timeline-line"></div>
        {experienceData.map((job, index) => (
          <TimelineItem key={index} job={job} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Work;
