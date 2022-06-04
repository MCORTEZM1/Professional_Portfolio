import React from 'react';
import ProjectCard from '../ProjectCard';


function Portfolio() {

    return (
        <>
            {/* <Jumbotron /> */}
            <div
                className="container"
                id='portfolio-intro-container'
            >
                <p
                    id='portfolio-intro'
                >Welcome to my portfolio. Please take a look at some of 
                the projects I have worked on. The top first 3 projects are
                group projects, on my journey learning to code in UC Berkeley's
                full stack developer bootcamp. If you wish to see more and to see how
                I've grown as a developer, please visit my GitHub repository.
                </p>
            </div>
            <ProjectCard />
        </>
    )
}

export default Portfolio;