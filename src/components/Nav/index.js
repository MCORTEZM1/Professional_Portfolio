import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';


function Nav(props) {
    const { 
        aboutSelected, 
        setAboutSelected, 
        contactSelected, 
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
      } = props;    

    const  handleContact = (event) => {
        setAboutSelected(false);
        setPortfolioSelected(false);
        setContactSelected(true);
        setResumeSelected(false);
    }
    const handleResume = (event) => {
        setAboutSelected(false);
        setPortfolioSelected(false);
        setContactSelected(false);
        setResumeSelected(true);
    }
    const handlePortfolio = (event) => {
        setAboutSelected(false);
        setPortfolioSelected(true);
        setContactSelected(false);
        setResumeSelected(false);
    }
    const handleAbout = (event) => {
        setAboutSelected(!aboutSelected);
        setPortfolioSelected(false);
        setContactSelected(false);
        setResumeSelected(false);
    }

    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid" id="navbar">
                <a class="navbar-brand"
                    id="my-name" 
                    href="#">Michael Cortez-Mejia
                </a>
                {/* <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="justify-content-end collapse navbar-collapse" id="navbarNav"
                    role="tablist"
                >
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class={`nav-link mx-2 ${aboutSelected &&  'active'}`} 
                                aria-current="page"
                                onClick={handleAbout}
                                href="#">About Me
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link mx-2 ${portfolioSelected && 'active'}`}
                                onClick={handlePortfolio}
                                href="#">Portfolio
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link mx-2 ${contactSelected && 'active'}`}
                                onClick={handleContact}
                                href="#">Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class={`nav-link mx-2 ${resumeSelected && 'active'}`}
                                onClick={handleResume}
                                href="#">Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Nav;
