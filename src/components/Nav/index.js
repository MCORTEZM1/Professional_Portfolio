import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import myResume from '../../assets/resume/RESUME6.3.22.pdf';


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
        // event.preventDefault();
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
        setAboutSelected(true);
        setPortfolioSelected(false);
        setContactSelected(false);
        setResumeSelected(false);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid" id="navbar">
                <a className="navbar-brand"
                    id="my-name" 
                    href="#">Michael Cortez-Mejia
                </a>
                {/* <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="justify-content-end collapse navbar-collapse" id="navbarNav"
                    role="tablist"
                >
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={`nav-link mx-2 ${aboutSelected &&  'active'}`} 
                                aria-current="page"
                                onClick={handleAbout}
                                href="#">About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mx-2 ${portfolioSelected && 'active'}`}
                                onClick={handlePortfolio}
                                href="#">Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mx-2 ${contactSelected && 'active'}`}
                                onClick={handleContact}
                                href="#">Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mx-2 ${resumeSelected && 'active'}`}
                                onClick={handleResume}
                                href={myResume}
                                download="MichaelCortez-RESUME6.3.22.pdf"
                                >Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Nav;
