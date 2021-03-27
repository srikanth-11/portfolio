import React from "react";

import "./Project.css";
import Button from "../../components/button/Button";
import { socialMediaLinks,projects } from "../../portfolio";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard"


export default function Projects() {
 
  return (
    
      <div className="main" id="projects">
        <h1 className="project-title"> Projects</h1>
        <div className="repo-cards-div-main">
          {projects.myproject.map((project, i) => {
            return <GithubRepoCard  projects={project}/>;
          })}
        </div>
        <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
      </div>
    
  );
} 

