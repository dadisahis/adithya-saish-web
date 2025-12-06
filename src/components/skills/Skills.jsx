import React from "react";
import "./skills.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Import generic logos or use paths
const frontendLogo = "/react.png"; // Placeholder path, adjust if needed
const backendLogo = "/node.png";   // Placeholder path
const cloudLogo = "/aws.png";      // Placeholder path

function Skills() {
    const navigate = useNavigate();

    const skillsData = [
        {
            id: 1,
            type: "frontend",
            title: "Frontend",
            hp: "120 HP",
            image: process.env.PUBLIC_URL + "/frontend/react.png", // Using React logo as main image
            description: "Specializes in building responsive and interactive user interfaces.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Redux", "Material UI"],
            weakness: "IE Internet Explorer",
            resistance: "Pixel Perfection",
            retreat: "Coffee"
        },
        {
            id: 2,
            type: "backend",
            title: "Backend",
            hp: "150 HP",
            image: process.env.PUBLIC_URL + "/backend/python.png", // Using Node logo
            description: "Expert in server-side logic, databases, and API integration.",
            skills: ["Node.js", "Express", "FastAPI", "Python", "Django", "PostgreSQL", "Redshift", "REST APIs"],
            weakness: "Spaghetti Code",
            resistance: "High Load",
            retreat: "Docs"
        },
        {
            id: 3,
            type: "cloud",
            title: "Cloud",
            hp: "100 HP",
            image: process.env.PUBLIC_URL + "/backend/aws.png", // Using AWS logo
            description: "Proficient in deploying and managing scalable cloud infrastructure.",
            skills: ["AWS", "Lambda", "S3", "Docker", "Kubernetes", "CI/CD", "Microservices"],
            weakness: "Downtime",
            resistance: "Scaling",
            retreat: "Logs"
        }
    ];

    return (
        <div className="skills-page-container">


            <motion.div
                className="skills-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>My Skills</h1>
                <p>Choose your fighter.</p>
            </motion.div>

            <div className="cards-container">
                {skillsData.map((card, index) => (
                    <motion.div
                        className={`pokemon-card ${card.type}`}
                        key={card.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05, rotateY: 10, zIndex: 10 }}
                    >
                        <div className="card-inner">
                            <div className="card-header">
                                <span className="name">{card.title}</span>
                                <span className="hp">{card.hp}</span>
                            </div>

                            <div className="card-image-container">
                                <img src={card.image} alt={card.title} className="main-image" />
                            </div>

                            <div className="card-info">
                                <div className="types">
                                    <span className="type-badge">{card.type}</span>
                                </div>
                                <p className="description">{card.description}</p>

                                <div className="moves-list">
                                    <div className="move-label">Moves (Skills):</div>
                                    <div className="skills-tags">
                                        {card.skills.map((skill, i) => (
                                            <span key={i} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="stats-row">
                                    <div className="stat">
                                        <span className="label">Weakness</span>
                                        <span className="value">{card.weakness}</span>
                                    </div>
                                    <div className="stat">
                                        <span className="label">Resistance</span>
                                        <span className="value">{card.resistance}</span>
                                    </div>
                                    <div className="stat">
                                        <span className="label">Retreat</span>
                                        <span className="value">{card.retreat}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="holo-overlay"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
