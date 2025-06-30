import React from "react";
import "./Projects.scss";
import ecom from "../../Assets/ecom.png";
import todo from "../../Assets/todo.webp";
import s from "../../Assets/Socialify.png";
import movi from "../../Assets/movi.png";
function Projects() {
  return (
    <div className="projects" id="project">
      <div className="title center">
        <div className="titl">Projects</div>
      </div>
      <div className="proj center">
        <div className="proj-box">
          <div className="proj-item center">
            
              <div className="img">
              <a href="https://github.com/1Aditya2/E-Commerce-Application" target="blank"><div className="overlay"></div></a>
                
                <img src={ecom} alt="" />
              </div>
            

            <div className="name">Posterz</div>
          </div>
          <div className="proj-item center">
            <div className="img">
              <a href="https://github.com/1Aditya2/Social-Media-Application-Frontend" target="blank"><div className="overlay"></div></a>
              

              <img src={s} alt="" />
            </div>
            <div className="name">Social Media App</div>
          </div>
          <div className="proj-item center">
            <div className="img">
              <a href="https://github.com/1Aditya2/Movie-Recommendation-UI" target="blank"><div className="overlay"></div></a>
              
              <img src={movi} alt="" />
            </div>
            <div className="name">Movie Recommendation</div>
          </div>
          <div className="proj-item center">
            <div className="img">
              <a href="https://github.com/1Aditya2/FullStack-To-Do-App" target="blank"><div className="overlay"></div></a>
              
              <img src={todo} alt="" />
            </div>
            <div className="name">To Do App</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
