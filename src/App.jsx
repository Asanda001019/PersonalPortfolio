import React from 'react';
import TeamSection from './components/TeamSection';
import Resume from './components/Resume';
import Skills from './components/Skills';
import './App.css';
import UserProfile from './components/UserProfile';
import Projects from './components/Projects';
import Project from './components/Project';
import Goals from './components/Goals';
import Assessments from './components/Assessments';

function App() {
  return (
    <div>
      <UserProfile/>
      <Resume />
      <Skills />
      <Projects />
      <Project/> 
      <Assessments/>
      <Goals/>
      <TeamSection />
     
     
      {/* Other components can go here */}
    </div>
  );
}

export default App;
