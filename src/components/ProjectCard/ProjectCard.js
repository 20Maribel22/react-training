import React from 'react'
import './ProjectCard.css'


function ProjectCard({text, img}) {
  return (
    <div>
         <li className="project__card">
          <img src={img} className="project__card-image" alt={text} />
          <p className="project__card-title">{text}</p>
        </li>
    </div>
  )
}

export default ProjectCard