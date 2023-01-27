import react from "react";
import "./footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer_container">
        <div className="footer_left">
          <p>Made with ❤️ by Adithya Saish</p>
        </div>
        <div className="footer_right">
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
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
