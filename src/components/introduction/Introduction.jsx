import React, { useState } from "react";
import "./introduction.scss";
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNavigate } from "react-router-dom";
import experienceData from "../../data/experience.json";
import ProfilePic from "../../assets/ProfilePic2.jpg";

function Introduction() {
  const navigate = useNavigate();
  const currentRole = experienceData[0];
  const [copied, setCopied] = useState(false);
  const email = "adithya.work99@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Skills for Arsenal section - text-based like the design
  const arsenalSkills = {
    left: ["React / Next.js", "TypeScript", "FastAPI"],
    right: ["PostgreSQL", "AWS / Cloud", "Python"]
  };

  return (
    <div className="editorial-intro">
      <div className="editorial-grid">

        {/* Hero Card - Left side, spans 2 rows */}
        <motion.div
          className="card hero-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-content">
            <div className="hero-text">
              <span className="label">INTRODUCTION</span>
              <h1 className="hero-title">
                <span className="line1">Hello, I'm</span>
                <span className="line2">Adithya Saish</span>
              </h1>
              <p className="hero-description">
                Full Stack Developer | Backend Development | Distrubuted Systems | Emotionally Drained Chelsea Fan
              </p>
              <span className="location">BASED IN INDIA / GURGAON</span>
            </div>
            <div className="hero-photo">
              <img src={ProfilePic} alt="Adithya Saish" className="profile-img" />
            </div>
          </div>
        </motion.div>

        {/* Arsenal Card - Top right */}
        <motion.div
          className="card arsenal-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() => navigate('/skills')}
        >
          <span className="label">Tech Stack</span>
          <div className="skills-columns">
            <div className="skills-col">
              {arsenalSkills.left.map((skill, i) => (
                <span key={i} className="skill-item">{skill}</span>
              ))}
            </div>
            <div className="skills-col">
              {arsenalSkills.right.map((skill, i) => (
                <span key={i} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
          <span className="footer-label">And more...</span>
        </motion.div>

        {/* Current Role Card - Middle right */}
        <motion.div
          className="card status-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => navigate('/work')}
        >
          <span className="label">CURRENT ROLE</span>
          <h2 className="role-title">{currentRole.profile_name}</h2>
          <p className="role-company">at {currentRole.company_name}</p>
          <p className="role-date">{currentRole.timeline}</p>
        </motion.div>

        {/* Selected Works Card - Bottom left */}
        <motion.div
          className="card works-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => navigate('/projects')}
        >
          {/* <span className="label">SELECTED WORKS</span> */}
          <h2 className="works-title">Projects</h2>
          <p className="works-subtitle">View all projects</p>
          <div className="tags">
            <span className="tag">DESIGN</span>
            <span className="tag">DEV</span>
          </div>
        </motion.div>

        {/* Connect / Digital Footprint Card - Bottom middle */}
        <motion.div
          className="card social-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="label">CONNECT</span>

          <div className="links-list">
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="link-item">
              <span className="link-text">LinkedIn</span>
              <span className="arrow">↗</span>
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="link-item">
              <span className="link-text">GitHub</span>
              <span className="arrow">↗</span>
            </a>
            <a href={siteConfig.links.leetcode} target="_blank" rel="noreferrer" className="link-item">
              <span className="link-text">LeetCode</span>
              <span className="arrow">↗</span>
            </a>
          </div>

          <div className="inquiries-section">
            <div className="divider"></div>
            <span className="label sub-label">INQUIRIES</span>
            <div className="email-wrapper">
              <a href={`mailto:${email}`} className="email-link">
                {email}
              </a>
              <button className="copy-btn" onClick={handleCopyEmail} title="Copy email">
                <ContentCopyIcon fontSize="small" />
                {copied && <span className="copied-tooltip">Copied!</span>}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Visual Accent Card - Bottom right */}
        <motion.div
          className="card accent-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Dark accent card - minimal visual element */}
        </motion.div>

      </div>
    </div>
  );
}

export default Introduction;
