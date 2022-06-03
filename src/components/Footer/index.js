import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() { 

 return (
    <footer id='footer' className=''>
        <div id="icons" className="text-center">
                <a href="http://linkedin.com">
                    <LinkedInIcon className="mx-2" fontSize='large' color='action'/>
                </a>
                <a href="https://github.com">
                    <GitHubIcon  className="mx-2" fontSize='large' color='action' /*sx={{color: red[500]}}*/ />
                </a>
                <a href="https://stackoverflow.com">
                    <button id='link-btn' className="btn mx-2"> 
                        <svg id='stackIcon' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9e9e9e" class="bi bi-stack-overflow" viewBox="8 4 20 19">
                            <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z"/>
                            <path d="M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z"/>
                        </svg>
 
                    </button>
                </a>
        </div>
    </footer>
 );
};

export default Footer; 