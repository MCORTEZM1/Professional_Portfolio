import React from 'react';
import imgMe from '../../assets/images/ME.jpg';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import './style.css';

function About() {

    return (
        <Paper elevation={7} className='about pb-4' id='about-container'>
                <Grid container justifyContent={'center'} alignItems='center'>   
                <img className="me" src={imgMe} alt="Picture of me" />

                    <Grid item md={1}>
                    </Grid>
                    <Grid item md={9}>
                        <section id="about-me" className="about-me">
                            <h2 className="border-text">
                                About Me
                            </h2>
                            <div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit maiores eum accusantium. Architecto ducimus earum nulla.
                                    Accusantium non obcaecati aliquam cupiditate porro. Voluptate distinctio quis odit est, libero rem neque doloribus assumenda cumque earum nulla velit id doloremque dolor ipsa nam reprehenderit itaque officiis mollitia adipisci!
                                </p>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique suscipit possimus provident temporibus, alias illum perspiciatis excepturi quis accusantium, et quasi expedita quod? Non sapiente libero consequuntur quae, fuga nostrum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab excepturi doloribus aliquam. Consequuntur obcaecati laborum nisi vitae perspiciatis vero harum itaque similique voluptas. Facere quis hic modi et iste?
                            </div>
                        </section >
                    </Grid>
                </Grid>
        </Paper >
    )
}

export default About;