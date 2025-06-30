import React from "react";
import "./Navbar.scss";
import AnimatedCursor from "react-animated-cursor";
import resume from "../../Assets/Aditya's Resume.pdf";
function Navbar() {
  return (
    <div className="navbar center">
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color="0,0,0"
        outerAlpha={0.3}
        innerScale={0.5}
        outerScale={3}
        trailingSpeed={7}
        innerStyle={{ border: "2px solid white" }}
      />
      <div className="nav-items">
        <ul>
          <a href="#about">
            <li className="norm-nav lnk">About Me</li>
            <li className="resp-nav lnk">
              <i className="fa-solid fa-address-card"></i>
            </li>
          </a>

          <a href="#project">
            <li className="norm-nav lnk">Projects</li>
            <li className="resp-nav lnk">
              <i className="fa-solid fa-code"></i>
            </li>
          </a>

          <a href="#skill">
            <li className="norm-nav lnk">Skills</li>
            <li className="resp-nav lnk">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </li>
          </a>
          <a href="#achi">
            <li className="norm-nav lnk">Achievements</li>
            <li className="resp-nav lnk">
              <i className="fa-solid fa-star"></i>
            </li>
          </a>
          <a href={resume} download={true}>
            <li className="norm-nav lnk">Resume</li>
            <li className="resp-nav lnk">
            <i class="fa-solid fa-file-pdf"></i>
            </li>
          </a>

          <a href="mailto:yadiyadav515@gmail.com">
            {" "}
            <li className="norm-nav lnk">Contact Me</li>
            <li className="resp-nav lnk">
              <i className="fa-solid fa-envelope"></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
