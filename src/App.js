import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/Contact';

import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';


function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);


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
      />
      <main>
      {aboutSelected && (
        <About/>
      )}
      {contactSelected && (
        <ContactForm />
      )}


      </main>
      <Footer />
    </div>
  );
}

export default App;
