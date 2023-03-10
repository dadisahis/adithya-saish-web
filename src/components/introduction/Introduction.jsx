import "./introduction.scss";
import ProfilePhoto from "../../assets/ProfilePhoto.jpeg";
import { motion } from "framer-motion";
import Ripple from "../ripple/Ripple";

function Introduction(props) {
  const text = "Hi 👋, I am Adithya Saish. I'm a Full Stack Developer.";
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const children = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "string",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="intro">
      <div className="intro_container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="intro_left"
        >
          <motion.img src={ProfilePhoto} alt="" className="intro_img" />
        </motion.div>
        <motion.div
          className="intro_right"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="intro_title">
            {words.map((word, ind) => (
              <motion.p variants={children} className="word">
                {word}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            variants={container}
            transition={{ delay: 5 }}
            className="intro_description"
          >
            <p>
              I like to code. I am good with Python and Javascript. Apart from
              that, I am a die hard Chelsea fan and have an amazing music taste.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            transition={{ delay: 5 }}
            className="intro_button_container"
          >
            <a
              className="button"
              style={{ background: "black", color: "#ececec" }}
              onClick={() => props.handleClick(props.contactMeRef)}
            >
              Contact Me
            </a>
            <a
              className="button"
              target="_blank"
              rel="noreferer nooperner"
              href="https://github.com/dadisahis"
            >
              Github
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Introduction;
