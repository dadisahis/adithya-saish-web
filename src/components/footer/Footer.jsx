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
          <div className="icon">
            <TwitterIcon />
          </div>
          <div className="icon">
            <GitHubIcon className="" />
          </div>
          <div className="icon">
            <LinkedIn className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
