import react from "react";
import "./sidebar.scss";
import LeetCodeIcon from "../icons/LeetCodeIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import siteConfig from "../../config/siteConfig";

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
            <a className="sidebar_icon" href={siteConfig.links.leetcode}>
              <LeetCodeIcon />
            </a>
            <a className="sidebar_icon" href={siteConfig.links.github}>
              <GitHubIcon />
            </a>
            <a
              className="sidebar_icon"
              href={siteConfig.links.linkedin}
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
