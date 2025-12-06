import React, { useState, useEffect } from "react";
import "./navbar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sidebar from "../sidebar/Sidebar"; // You might need to update Sidebar too if it uses refs
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollHandler = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className={scrolled ? "navbar blur" : "navbar"}>
      <div className="navbar_container">
        <div className="navbar_left">
          <div className="logo" onClick={() => navigate("/")}>
            <h1>AS</h1>
          </div>
        </div>
        <div className="navbar_center">
          <Link to="/" className={`link ${isActive("/") ? "active" : ""}`}>
            <p>Home</p>
          </Link>

          <Link to="/work" className={`link ${isActive("/work") ? "active" : ""}`}>
            <p>Work</p>
          </Link>
          <Link to="/projects" className={`link ${isActive("/projects") ? "active" : ""}`}>
            <p>Projects</p>
          </Link>
          <Link to="/skills" className={`link ${isActive("/skills") ? "active" : ""}`}>
            <p>Skills</p>
          </Link>
        </div>
        <div className="navbar_right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
            {/* Sidebar needs to be updated to handle Links as well, or just hide it for now if not used */}
            <Sidebar open={open} setOpen={setOpen} />
          </div>
          <a className="icon" href="https://twitter.com/addysaish" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a className="icon" href="https://github.com/dadisahis" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/adithya-saish-445506194/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
