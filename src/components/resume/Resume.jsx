import react,{useEffect, useRef} from "react";
import "./resume.scss";
import Timeline from "../timeline/Timeline";
import experienceData from "../../data/experience.json";
import Certifications from "../certifications/Certifications";
import certificationData from "../../data/certifications.json";
import { motion } from "framer-motion";
import { useAnimation, useInView } from "framer-motion";
function Resume() {
  const resumeRef = useRef(null)
  const isInView = useInView(resumeRef,{once: true, threshold: .2})
  const animation = useAnimation()
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "tween", delay: 0.5, stiffness: 10 },
    },
  };
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
      animation.start({height: '500vh'})
    }
  },[isInView])
  return (
    <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: .5}}
    viewport={{once: true}} 
    className="resume"
    >
      <div className="resume_container">
        <div className="resume_title">
          <p>EXPERIENCE</p>
        </div>
        <div className="resume_subtitle">
          <p>
            Here is a timeline of my professional journey as a developer, the
            projects that I have worked on , the impact my work has made and the
            certifications I have earned.
          </p>
        </div>
        <div className="timeline_section">
          <p className="title">Work History</p>
          {experienceData.map((item) => (
            <Timeline data={item} />
          ))}
        </div>
        <div className="certification_section">
          <p className="title">Certifications</p>
          <div className="certification_section_container">
            {certificationData.map((item) => (
              <Certifications data={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
