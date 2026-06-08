import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contacts />
      <footer className="footer">
        <p>&copy; 2026 Nelli Gorlova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
