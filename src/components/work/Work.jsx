import react from "react";
import "./work.scss";
import projectData from "../../data/projects.json";
import ProjectItem from "../projectItem/ProjectItem";

function Work() {
  console.log(projectData);
  return (
    <div className="work_container">
      <div className="title">
        <p>Work</p>
      </div>
      <div className="subtitle">
        <p>Check my commercial and non commercial projects.</p>
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
