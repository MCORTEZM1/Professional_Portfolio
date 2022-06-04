import React, { useState } from 'react';
import Nav from '../Nav';

function Header({
  aboutSelected, 
  setAboutSelected, 
  contactSelected, 
  setContactSelected,
  portfolioSelected,
  setPortfolioSelected,
  resumeSelected,
  setResumeSelected,
  menuOpen,
  setMenuOpen
  }) { 

    return (
        <header
          id="header-container"
        >
          <Nav 
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </header>
    )
}

export default Header;