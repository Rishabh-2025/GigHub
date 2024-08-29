import React from "react";
import "./ProjectCard.scss";

function ProjectCard({ item }) {
  return (
    <div className="projectCard">
      <img src={item.img} alt="" />
      <div className="projectCardInfo">
        <img src={item.pp} alt="" />
        <div className="projectCardTexts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
