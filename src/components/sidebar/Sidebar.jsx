import react from "react";
import "./sidebar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Sidebar(props) {
  return (
    <div className="sidebar">
      {props.open && (
        <div className="sidebar_container">
          <div className="sidebar_top">
            <div
              className="sidebar_item"
              onClick={() => props.handleClick(props.workRef)}
            >
              <p>Work</p>
            </div>
            <div
              className="sidebar_item"
              onClick={() => props.handleClick(props.resumeRef)}
            >
              <p>Resume</p>
            </div>
            <div
              className="sidebar_item"
              onClick={() => props.handleClick(props.contactMeRef)}
            >
              <p>Contact</p>
            </div>
          </div>
          {/* <div className="sidebar_bottom">
            <a className="sidebar_icon" href="https://twitter.com/addysaish">
              <TwitterIcon />
            </a>
            <a className="sidebar_icon" href="https://github.com/dadisahis">
              <GitHubIcon />
            </a>
            <a
              className="sidebar_icon"
              href="https://www.linkedin.com/in/adithya-saish-445506194/"
            >
              <LinkedIn />
            </a>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
