import React, { useState, useEffect } from "react";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../sidebar/Sidebar";
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

  const isActive = (path) => location.pathname === path;

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar_container">
        {/* Left: Logo */}
        <div className="navbar_left">
          <div className="logo" onClick={() => navigate("/")}>
            <span>AS.</span>
          </div>
        </div>

        {/* Right: Navigation Links (Desktop) + Hamburger (Mobile) */}
        <div className="navbar_right">
          {/* Navigation Links - Desktop only */}
          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/work" className={`nav-link ${isActive("/work") ? "active" : ""}`}>
              Work
            </Link>
            <Link to="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`}>
              Projects
            </Link>
            <Link to="/skills" className={`nav-link ${isActive("/skills") ? "active" : ""}`}>
              Skills
            </Link>
          </div>

          {/* Hamburger - Mobile only */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </div>
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
