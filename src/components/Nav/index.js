import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import myResume from '../../assets/resume/Resume_MichaelCortezUD6.22.pdf';
import './style.css';

function Nav(props) {
    const { 
        aboutSelected, 
        setAboutSelected, 
        contactSelected, 
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
        menuOpen,
        setMenuOpen,
    } = props;    

    const  handleContact = (event) => {
        setAboutSelected(false);
        setPortfolioSelected(false);
        setContactSelected(true);
        setResumeSelected(false);
    }
    // const handleResume = (event) => {
    //     // event.preventDefault();
    //     setAboutSelected(false);
    //     setPortfolioSelected(false);
    //     setContactSelected(false);
    //     setResumeSelected(true);
    // }
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

    const handleMenu = (event) => {
        console.log(menuOpen)
        setMenuOpen(!menuOpen);
    }
  

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid" id="navbar">
                <a className="navbar-brand"
                    id="my-name" 
                    href="#">Michael Cortez
                </a>
                    <MenuIcon
                        id='menu' 
                        onClick={handleMenu}
                    />
                <div className={`justify-content-end ${!menuOpen && 'collapse'} `} id="navbarNav"
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
                            <a 
                                className={`nav-link mx-2 text-decoration-none ${resumeSelected && 'active'} `}
                                onClick={() => window.open(`${myResume}`, '_blank')}
                                href="#"
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

