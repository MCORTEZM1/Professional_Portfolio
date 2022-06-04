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
  setResumeSelected}) { 

    


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
          />
        </header>
    )
}

export default Header;