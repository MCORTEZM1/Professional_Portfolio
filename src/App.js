import './App.css';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


import React, { useState } from 'react';


function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div id="main">
      <Header 
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
      <main>
      {aboutSelected && (
        <About/>
      )}
      {contactSelected && (
        <ContactForm />
      )}
      {portfolioSelected && (
        <Portfolio />
      )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
