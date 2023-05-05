import react, { useEffect, useRef } from "react";
import "./work.scss";
import projectData from "../../data/projects.json";
import ProjectItem from "../projectItem/ProjectItem";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";

function Work() {
  const workRef = useRef(null)
  const isInView = useInView(workRef,{once: true, threshold: .2})
  const animation = useAnimation()
  useEffect(()=>{
    if(isInView){
      animation.start({
        y:0,
        height: 'auto',
        transition:{
          ease:'easeOut',
          duration: 1,
        }

      })
    }else{
      animation.start({height: '200vh'})
    }
  },[isInView])
  return (
    <motion.div animate={animation} className="work_container" ref={workRef}>
      <div className="title">
        <p>PROJECTS</p>
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
    </motion.div>
  );
}

export default Work;

