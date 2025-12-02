import React from 'react'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import Navbar from './components/NavBar'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <ProjectsSection />
    </div>
  )
}

export default App