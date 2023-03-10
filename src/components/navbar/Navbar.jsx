import react, { useState } from "react";
import "./navbar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sidebar from "../sidebar/Sidebar";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_left">
          <div className="logo">
            <h1>AS</h1>
          </div>
        </div>
        <div className="navbar_center">
          <div
            className="work_component"
            onClick={() => props.handleClick(props.workRef)}
          >
            <p>Work</p>
          </div>
          <div
            className="resume_component"
            onClick={() => props.handleClick(props.resumeRef)}
          >
            <p>Resume</p>
          </div>
          <div
            className="contact_component"
            onClick={() => props.handleClick(props.contactMeRef)}
          >
            <p>Contact</p>
          </div>
        </div>
        <div className="navbar_right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
            <Sidebar
              open={open}
              handleClick={props.handleClick}
              workRef={props.workRef}
              resumeRef={props.resumeRef}
              contactMeRef={props.contactMeRef}
            />
          </div>

          <a className="icon" href="https://twitter.com/addysaish">
            <TwitterIcon />
          </a>
          <a className="icon" href="https://github.com/dadisahis">
            <GitHubIcon />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/adithya-saish-445506194/"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
