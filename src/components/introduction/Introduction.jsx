import react from "react";
import "./introduction.scss";
import human from "../../assets/humanStock.jpg";

function Introduction() {
  return (
    <div className="intro">
      <div className="intro_container">
        <div className="intro_left">
          <img src={human} alt="" className="intro_img" />
        </div>
        <div className="intro_right">
          <div className="intro_title">
            <p>
              Hi, I'm Adithya Saish. I'm a{" "}
              <span className="profile">Full Stack Developer</span>
            </p>
          </div>
          <div className="intro_description">
            <p>
              I am a Full Stack Developer based on Delhi, India. I have more
              than 1 year of experience and I have a expertise on Python,React.
            </p>
          </div>
          <div className="intro_button_container">
            <a
              className="button"
              style={{ background: "black", color: "#ececec" }}
              href="/"
            >
              Contact Me
            </a>
            <a
              className="button"
              style={{ border: "0.5px solid grey" }}
              target="_blank"
              rel="noreferer nooperner"
              href="https://github.com/dadisahis"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
