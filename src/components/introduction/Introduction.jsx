import React, { useState } from "react";
import "./introduction.scss";
import { motion } from "framer-motion";
import siteConfig from "../../config/siteConfig";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from "react-router-dom";
import ProfilePic from "../../assets/ProfilePic2.jpg";
import Avatar from '@mui/material/Avatar';
import LeetCodeIcon from "../icons/LeetCodeIcon";

import experienceData from "../../data/experience.json";

function Introduction() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const email = siteConfig.links.email.replace('mailto:', 'adithya.work99@gmail.com');
  const currentRole = experienceData[0];

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const skills = [
    { name: 'React', path: '/frontend/react.png' },
    { name: 'Next.js', path: '/frontend/next.png' },
    { name: 'Node.js', path: '/backend/node.png' },
    { name: 'Python', path: '/backend/python.png' },
    { name: 'AWS', path: '/backend/aws.png' },
    { name: 'Django', path: '/backend/django.png' },
    { name: 'Sass', path: '/frontend/sass.png' },
    { name: 'HTML', path: '/frontend/html.png' },
    { name: 'CSS', path: '/frontend/css.png' },
    { name: 'Lambda', path: '/backend/lambda.png' },
  ];

  return (
    <div className="bento-intro">
      <div className="bento-grid">

        {/* 2. Top Right: Intro (Wide) */}
        <motion.div
          className="bento-card intro-card"
          whileHover={{ scale: 1.01 }}
        >
          <div className="card-content intro-content">
            <div className="intro-text-content">
              <div className="intro-header">
                <span className="icon">👋</span>
                <h2>Hello, I'm {siteConfig.title}</h2>
              </div>
              <p className="intro-text">
                Full Stack Developer | Backend Development | Distrubuted Systems | Emotionally Drained Chelsea Fan
              </p>
            </div>
            <div className="profile-pic-container">
              <Avatar
                alt="Adithya Saish"
                src={ProfilePic}
                sx={{ width: 120, height: 120, border: '2px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}
              />
            </div>
          </div>
        </motion.div>

        {/* 1. Top Left: Skills (Small) */}
        <motion.div
          className="bento-card skills-card"
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate('/skills')}
        >
          <div className="card-content">
            <h3>Skills</h3>
            <div className="skills-preview">
              {skills.slice(0, 9).map((skill, index) => (
                <div key={index} className="skill-avatar" title={skill.name}>
                  <img src={process.env.PUBLIC_URL + skill.path} alt={skill.name} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>



        {/* 3. Bottom Left: Projects */}
        <motion.div
          className="bento-card projects-card"
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate('/projects')}
        >
          <div className="card-content">
            <div className="icon-wrapper">
              <CodeIcon fontSize="medium" />
            </div>
            <h3>Projects</h3>
            <p>Check out my work</p>
          </div>
        </motion.div>

        {/* 4. Bottom Middle: Work Experience */}
        <motion.div
          className="bento-card work-card"
          whileHover={{ scale: 1.02 }}
          onClick={() => navigate('/work')}
        >
          <div className="card-content">
            <div className="work-header">
              <WorkIcon className="work-icon" />
              <div>
                <h3>Current Role</h3>
                <p>{currentRole.profile_name} @ {currentRole.company_name}</p>
              </div>
            </div>
            <p className="work-date">{currentRole.timeline}</p>
          </div>
        </motion.div>

        {/* 5. Bottom Right: Connect (with Email) */}
        <motion.div
          className="bento-card profiles-card"
          whileHover={{ scale: 1.02 }}
        >
          <div className="card-content">
            <h3>Connect</h3>

            <div className="profiles-links">
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
              <a href={siteConfig.links.leetcode} target="_blank" rel="noreferrer"><LeetCodeIcon /></a>
            </div>
            <div className="email-container" onClick={handleCopyEmail}>
              <ContentCopyIcon fontSize="small" /> <span>{copied ? "Copied!" : "adithya.work99@gmail.com"}</span>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="horizon-light"></div>
    </div>
  );
}

export default Introduction;
