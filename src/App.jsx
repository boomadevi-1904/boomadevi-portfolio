import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Education from './components/Sections/Education';
import Projects from './components/Sections/Projects';
import Achievements from './components/Sections/Achievements';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
