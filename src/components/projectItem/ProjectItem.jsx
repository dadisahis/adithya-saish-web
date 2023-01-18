import react from "react";
import "./projectItem.scss";
import { Chip } from "@mui/material";

function ProjectItem(data) {
  console.log(data.data.id);
  return (
    <div className="project_container">
      <div className="img_container">
        <img src={data.data.img_url} alt="" />
      </div>
      <div className="title_container">
        <p>{data.data.name}</p>
      </div>
      <div className="techStack_container">
        {data.data.stack.map((item) => (
          <Chip label={item} className="chip" />
        ))}
      </div>
      <div className="description_container">
        <p>{data.data.description}</p>
      </div>
      <div className="button_container"></div>
    </div>
  );
}

export default ProjectItem;
