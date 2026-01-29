import React, { useEffect, useRef } from "react";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ open, setOpen }) {
  const sidebarRef = useRef(null);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [location, setOpen]);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  return (
    <div className={`sidebar ${open ? "open" : ""}`} ref={sidebarRef}>
      {open && (
        <div className="sidebar_container">
          <div className="sidebar_top">
            <Link to="/" className="sidebar_item" onClick={() => setOpen(false)}>
              <p>Home</p>
            </Link>
            <Link to="/work" className="sidebar_item" onClick={() => setOpen(false)}>
              <p>Work</p>
            </Link>
            <Link to="/projects" className="sidebar_item" onClick={() => setOpen(false)}>
              <p>Projects</p>
            </Link>
            <Link to="/skills" className="sidebar_item" onClick={() => setOpen(false)}>
              <p>Skills</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
