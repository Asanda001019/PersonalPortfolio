import React from 'react';
import TeamSection from './components/TeamSection';
import Resume from './components/Resume';
import Skills from './components/Skills';
import './App.css';
import UserProfile from './components/UserProfile';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <UserProfile/>
      <Resume />
      <Skills />
      <Projects />
      <TeamSection />
     
     
      {/* Other components can go here */}
    </div>
  );
}

export default App;
