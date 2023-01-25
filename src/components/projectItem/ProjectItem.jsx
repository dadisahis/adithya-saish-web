import react from "react";
import "./projectItem.scss";
import { Chip } from "@mui/material";
import { delay, motion } from "framer-motion";
function ProjectItem(data) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "tween", delay: 2, stiffness: 10 },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="project_container"
      whileHover={{ scale: 1.1 }}
    >
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
    </motion.div>
  );
}

export default ProjectItem;
