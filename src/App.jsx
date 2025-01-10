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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserProfile/>} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/team" element={<TeamSection />} />
        </Routes>
      </Router>
      {/* <UserProfile/>
      <Resume />
      <Skills />
      <Projects />
      <Project/> 
      <Assessments/>
      <Goals/>
      <TeamSection /> */}
     
     
      {/* Other components can go here */}
    </div>
  );
}

export default App;
