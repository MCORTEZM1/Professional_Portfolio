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
                >In the beginning of my full-stack developer journey, this website started out solely as basic HTML and CSS... 
                In it's current deployment, just 6 months later, its a single-page-application built using React for the front end.
                Below are a handful of group and solo-projects developed during Berkeley's
                full stack developer bootcamp. If you would like to see more examples and to see how
                I've grown as a developer, please visit my GitHub repository!
                </p>
            </div>
            <ProjectCard />
        </>
    )
}

export default Portfolio;