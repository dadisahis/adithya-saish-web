import React, { useEffect, useRef, useState, createRef } from "react";
import Introduction from "../../components/introduction/Introduction";
import Navbar from "../../components/navbar/Navbar";
import Ripple from "../../components/ripple/Ripple";
import Work from "../../components/work/Work";
import Resume from "../../components/resume/Resume";
import "./home.scss";
import Contactme from "../../components/contactme/Contactme";
import Footer from "../../components/footer/Footer";
function Home() {
  // const [color, setColor] = useState("#E0144C");
  // function getRandom(max) {
  //   return Math.floor(Math.random() * max);
  // }
  // const colorArray = ["#E0144C", "#00ABB3", "#FFCACA", "#F07DEA", "#607EAA"];
  const workRef = useRef(null);
  const resumeRef = useRef(null);
  const contactMeRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="home">
      <Navbar
        handleClick={handleClick}
        workRef={workRef}
        resumeRef={resumeRef}
        contactMeRef={contactMeRef}
      />
      <div className="home_container">
        <div className="home_intro_section">
          <Introduction />

          <div className="work_section" ref={workRef}>
            <Work />
          </div>
          <div className="resume_section" ref={resumeRef}>
            <Resume />
          </div>
          <div className="contactme_section" ref={contactMeRef}>
            <Contactme />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
