import react, { useEffect, useState } from "react";
import "./navbar.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [top,setTop] = useState(false)
  const navigate = useNavigate()
  const scrollHandler = ()=>{
    console.log(window.scrollY)
    if (window.scrollY>100){
      setTop(false)
    }
    else{
      setTop(true)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',scrollHandler)
    scrollHandler()
    return ()=>{
      window.removeEventListener('scroll',scrollHandler)
    }
  })
  console.log(top)
  return (    
    <div className={top ? "navbar" : "navbar blur"}>
      
      <div className="navbar_container">
        <div className="navbar_left">
          <div className="logo" onClick={()=> navigate('/')}>
            <h1>AS</h1>
          </div>
        </div>
        <div className="navbar_center">
          <div
            className="resume_component"
            onClick={() => navigate('/resume')}
          >
            <p>Experience</p>
          </div>
          <div
            className="work_component"
            onClick={() => navigate('/work')}
          >
            <p>Projects</p>
          </div>
          <div
            className="contact_component"
            onClick={() => navigate('/contactme')}
          >
            <p>Contact</p>
          </div>
        </div>
        <div className="navbar_right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
            <Sidebar
              open={open}
              handleClick={props.handleClick}
              workRef={props.workRef}
              resumeRef={props.resumeRef}
              contactMeRef={props.contactMeRef}
            />
          </div>
          <a className="icon" href="https://twitter.com/addysaish">
            <TwitterIcon />
          </a>
          <a className="icon" href="https://github.com/dadisahis">
            <GitHubIcon />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/adithya-saish-445506194/"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
