import React, { useState } from "react";
import "./About.scss";                            
function About() {
  const [para,setpara]=useState(`Hello, I am a passionate and skilled Frontend Developer with a Bachelor's degree in Technology and a strong foundation in computer science principles. I specialize in building robust, user-friendly, and visually appealing web applications. My technical proficiency includes React.js, Next.js, Redux Toolkit, Redux-Saga, Material-UI (MUI), styled-components, and SASS`)
  function handleClick(e){
    const l1=document.getElementById("1");
    const l2=document.getElementById("2");
    const l3=document.getElementById("3");
    if(l1.className=='lnk sel'){
      l1.classList.remove('sel')
    }
    else if(l2.className=='lnk sel'){
      l2.classList.remove('sel')
    }
    else if(l3.className=='lnk sel'){
      l3.classList.remove('sel')
    }
    const selectedId=e.target.id
    if(selectedId=='1'){
      l1.classList.add('sel')
    }
    else if(selectedId=='2'){
      l2.classList.add('sel')
    }
    else if(selectedId=='3'){
      l3.classList.add('sel')
    }
    
    const t=e.target.textContent
    if(t=='My Story'){
      setpara(`Hello, I am a passionate and skilled Frontend Developer with a Bachelor's degree in Technology and a strong foundation in computer science principles. I specialize in building robust, user-friendly, and visually appealing web applications. My technical proficiency includes React.js, Next.js, Redux Toolkit, Redux-Saga, Material-UI (MUI), styled-components, and SASS`)
    }
    else if(t=='Experience'){
      setpara('My professional journey has equipped me with a versatile skill set and a deep understanding of the software development lifecycle, enabling me to contribute effectively to any team or project. For the past 8 months, I have worked as a freelance software developer, successfully completing various projects for diverse clients.As a Software Developer at ElevateHQ, I am responsible for designing, developing, and maintaining web applications.I utilize my expertise in React.js, Next.js, Redux Toolkit, Redux-Saga, Material-UI, styled-components, and SASS to create efficient and scalable applications.')
    }
    else{
      setpara(`I hold a Bachelor's degree in Technology, graduating with a 7.91 pointer as part of the 2024 batch. My academic journey has equipped me with a solid foundation in computer science principles and software development methodologies. Prior to my degree, I completed my schooling in 2019, which laid the groundwork for my passion and proficiency in technology. My education has been instrumental in shaping my technical skills and problem-solving abilities, preparing me for a successful career in frontend development.`)
    }
  }

  return (
    <div className="about" id="about">
      <div className="abt">About me</div>
      <div className="info">
        <span className="c1"></span>
        <span className="c2"></span>
        <span className="c3"></span>
        <span className="c4"></span>
        <div className="nav-info">
          <ul>
            <li className="lnk sel" id='1' value='my story' onClick={handleClick}>My Story</li>
            <li className="lnk" id="2" value='exp' onClick={handleClick}>Education</li>
            <li className="lnk" value='edu' id="3" onClick={handleClick}>Experience</li>
          </ul>
        </div>
        <div className="abt-info">
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
