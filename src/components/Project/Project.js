import React, {  useState } from "react";
import "./Project.css";

import ProjectCard from "../ProjectCard/ProjectCard";

import { projects } from "./../../helpers/projectList";

function Project() {
  const [itemsShow, setItemsShow] = useState(2);
  const [hasLoad, setHasLoad] = useState(true);

  const handleCardAdd = () => {
    setItemsShow((prev) => prev + 2);

 if ( itemsShow >= projects.length) {
    setHasLoad(false)
 }
    
  };
    
  return (
    <div className="project">
      <ul className="project__cards"> 
        {projects.slice(0, itemsShow).map((project) => {
          return (
            <ProjectCard
              text={project.text}
              img={project.img}
              key={project.id}
            />
          );
        })}

        {/* {console.log({projects})} */}
      </ul>
    
      {hasLoad && <div className="project__container-button">
        <button
          className="project__button"
          type="button"
          onClick={handleCardAdd}
        >
          Ещё
        </button>
      </div>}
    </div>
  );
}

export default Project;
