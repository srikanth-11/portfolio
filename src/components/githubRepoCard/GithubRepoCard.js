import React from "react";
import "./GithubRepoCard.css";
import "../../components/softwareSkills/SoftwareSkill.css"
import { Fade } from "react-reveal";

export default function GithubRepoCard({projects}) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    
  }

  function openDemoApp(event, url) {
    event.stopPropagation();
    window.open(url, "_blank");
  }


  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className="repo-card-div"
          key={projects.id}
         
          onClick={() => openRepoinNewTab(projects.githubUrl)}
        >
          
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon"
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
              className="repo-svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name">{projects.projectName}</p>
          </div>
          <p className="repo-description">{projects.description}</p>
          <p className="demolink">
            <a
              style={{ fontWeight: "bold" }}
              onClick={(event) => openDemoApp(event, projects.demoUrl)}
            >
              Live Demo
            </a>
            
          
          </p>
          <p  className="demolink">
          <a
              style={{ fontWeight: "bold" }}
              onClick={() => openRepoinNewTab(projects.githubUrl)}
            >
              Github repo
            </a>
          </p>
          <div>
      <div className="software-skills-main-div">
        <p id="center">Techstack</p>
        <ul className="dev-icons">
          
          {projects.tech.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName} style={{ fontWeight: "bold" }} >
                <i className={skills.fontAwesomeClassname}></i>
                <p style={{ fontWeight: "bold" }} >{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
         
        </div>
      </div>
     
    </Fade>
  );
}
