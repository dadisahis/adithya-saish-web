import react from "react";
import "./footer.scss";
import LeetCodeIcon from "../icons/LeetCodeIcon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import siteConfig from "../../config/siteConfig";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer_container">
        <div className="footer_left">
          <p>Developed by Adithya Saish</p>
        </div>
        <div className="footer_right">
          <a className="icon" href={siteConfig.links.leetcode}>
            <LeetCodeIcon />
          </a>
          <a className="icon" href={siteConfig.links.github}>
            <GitHubIcon />
          </a>
          <a
            className="icon"
            href={siteConfig.links.linkedin}
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
