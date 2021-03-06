import React from 'react';
import projects from '../../utils/Projects';
import './style.css';

function ProjectCard() { 
    // console.log(projects)
    
    return (
       <div className="container"
            id="card-container"
       >
           <div 
              className="row d-flex justify-content-center"
              id='card-row'
            >
                {projects.map((project, i) => (  
                    <div 
                        className="card col-12 project-card"
                        key={i}
                        id={project.name}
                        onClick={() => window.open(`${project.deployed}`, '_blank')}
                    >
                        <div 
                            className="card-header text-center"
                            id='card-header'
                        >{project.name}
                        </div>
                        <img 
                            src={project.image}  
                            alt={project.name} 
                            id='card-image'
                        />
                        <div 
                            className={`card-body`} 
                            id='card-description'
                            >{project.description}
                            <h6 className='mt-2'> Tools:</h6>
                            <ul className="mt-2 ">
                                {project.tools.map((tool, i) => (
                                    <li
                                        key={i}
                                    >{tool}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
           </div>  
       </div>
    );

};

export default ProjectCard;