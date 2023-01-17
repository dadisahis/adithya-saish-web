import react from "react";
import "./navbar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <div className="logo">
          <h1>AS</h1>
        </div>
      </div>
      <div className="navbar_center">
        <p>Work</p>
        <p>Resume</p>
        <p>Contact</p>
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
