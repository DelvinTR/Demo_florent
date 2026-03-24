import React, { useEffect } from 'react';
import { content } from './data/content';
import HeroSection from './components/HeroSection';
import ProjectVision from './components/ProjectVision';
import InterventionsSection from './components/InterventionsSection';
import PillarsSection from './components/PillarsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-50 selection:bg-accent selection:text-white">
      <main>
        <HeroSection content={content.hero} />
        <ProjectVision content={content.project} />
        <InterventionsSection content={content.interventions} />
        <PillarsSection content={content.pillars} />
        <TeamSection content={content.team} />
        <ContactSection content={content.contact} />
      </main>
    </div>
  );
}

export default App;
