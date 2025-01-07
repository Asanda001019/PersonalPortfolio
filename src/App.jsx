import React from 'react';
import TeamSection from './components/TeamSection';
import Resume from './components/Resume';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div>
      <TeamSection />
      <Resume />
      <Skills />
      {/* Other components can go here */}
    </div>
  );
}

export default App;
