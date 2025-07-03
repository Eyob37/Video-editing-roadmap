import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgressBar from './components/ProgressBar';
import Roadmap from './components/Roadmap';
import SoftwareSection from './components/SoftwareSection';
import ResourcesSection from './components/ResourcesSection';
import ChallengesSection from './components/ChallengesSection';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <ProgressBar progress={scrollProgress} />
      <Hero />
      <Roadmap />
      <SoftwareSection />
      <ResourcesSection />
      <ChallengesSection />
      <Footer />
    </div>
  );
}

export default App;