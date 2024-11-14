import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { Button } from '@mui/material'; // example
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1 className="project-title"> {project.name}</h1>
      <img src={project.image} alt={project.name} className="project-image" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
