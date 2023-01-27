import react from "react";
import "./work.scss";
import projectData from "../../data/projects.json";
import ProjectItem from "../projectItem/ProjectItem";

function Work() {
  return (
    <div className="work_container">
      <div className="title">
        <p>Work 💻</p>
      </div>
      <div className="subtitle">
        <p>
          Here are a few of the various side projects that I have worked to make
          myself an able developer .
        </p>
        <p>If you have any questions feel free to ask for more information.</p>
      </div>
      <div className="projects">
        {projectData.map((item) => (
          <ProjectItem data={item} />
        ))}
      </div>
    </div>
  );
}
export default Work;
