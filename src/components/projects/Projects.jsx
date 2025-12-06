import React from "react";
import "./projects.scss";
import projectsData from "../../data/projects.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from '@mui/icons-material/Launch';

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="projects-page-container">


            <motion.div
                className="projects-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Projects</h1>
                <p>A collection of my recent work.</p>
            </motion.div>

            <div className="projects-stack">
                {projectsData.map((project, index) => (
                    <div
                        className="project-card-wrapper"
                        key={project.id}
                        style={{ top: `calc(100px + ${index * 20}px)` }} // Staggered sticky top
                    >
                        <motion.div
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-glass">
                                <div className="project-image">
                                    <img src={project.img_url} alt={project.name} />
                                    <div className="image-overlay"></div>
                                </div>
                                <div className="project-info">
                                    <div className="info-header">
                                        <h2>{project.name}</h2>
                                        <div className="links">
                                            <a href={project.github_url} target="_blank" rel="noreferrer" title="View Code">
                                                <GitHubIcon />
                                            </a>
                                            <a href={project.live_url} target="_blank" rel="noreferrer" title="Live Demo">
                                                <LaunchIcon />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="description">{project.description}</p>
                                    <div className="tech-stack">
                                        {project.stack.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
