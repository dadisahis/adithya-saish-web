import React, { useEffect, useState } from "react";
import Introduction from "../../components/introduction/Introduction";
import Navbar from "../../components/navbar/Navbar";
import Ripple from "../../components/ripple/Ripple";
import Work from "../../components/work/Work";
import Resume from "../../components/resume/Resume";
import "./home.scss";
function Home() {
  // const [color, setColor] = useState("#E0144C");
  // function getRandom(max) {
  //   return Math.floor(Math.random() * max);
  // }
  // const colorArray = ["#E0144C", "#00ABB3", "#FFCACA", "#F07DEA", "#607EAA"];
  return (
    <div className="home">
      <Navbar />
      <div className="home_container">
        <div className="home_intro_section">
          <Introduction />
          <Work />
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default Home;
