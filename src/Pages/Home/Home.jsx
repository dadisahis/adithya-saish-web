import React from "react";
import Introduction from "../../components/introduction/Introduction";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_intro_section">
          <Introduction />
        </div>
      </div>
    </div>
  );
}

export default Home;
