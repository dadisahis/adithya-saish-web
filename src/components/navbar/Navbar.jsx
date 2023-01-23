import react from "react";
import "./navbar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar(props) {
  return (
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
        <div className="icon">
          <TwitterIcon />
        </div>
        <div className="icon">
          <GitHubIcon className="" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
