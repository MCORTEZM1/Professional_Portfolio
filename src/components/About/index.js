import React from 'react';
import imgMe from '../../assets/images/ME.jpg';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import './style.css';

function About() {

    return (
        <Paper elevation={7} className='about pb-4' id='about-container'>
                <Grid container justifyContent={'center'} alignItems='center'>   
                {/* <img className="me" src={imgMe} alt="Picture of me" /> */}
                    <Grid item md={9}>
                        <section id="about-me" className="about-me">
                            <h2 className="border-text">
                                About Me
                            </h2>
                            <br/>
                            <div>

                               <p>
                                    Thank you for visiting my portfolio! 
                                    My name is Michael Cortez-Mejia... 
                                </p> 
                        
                                <p>
                                    Full stack web developer with a BA in sociology from UC Berkeley. Certified Full Stack Developer, 
                                    by UC Berkeley in frontend and backend technologies such as HTML, CSS, JavaScript, MongoDb, 
                                    Express, React, Node, Handlebars, NoSQL, SQL, mongoose, sequelize, Apollo, RESTful API, and GraphQL among others. 
                                    Experience with fundamentals/tools following the MERN stack, MVC paradigm, TDD - Test Driven Development, and
                                    OOP - Object Oriented Programming.
                                    Additional experience developing progressive web applications using manifest.json coupled with service workers and IndexedDB.
                                </p>

                                <p>
                                    Previous experience includes 10+ years in retail- client satisfaction and goal oriented. Fully committed to continuous learning and improvement. 
                                    Fascinated by different coding technologies and using critical analysis to understand a problem and develop a solution. My background in understanding complex data
                                    – from sociological to the back-end – and ability to implement complex solutions – to meet goals and satisfy clients –  makes me a solid asset to any software engineering team. 
                                </p>
                            </div>
                        </section >
                    </Grid>
                </Grid>
        </Paper >
    )
}

export default About;