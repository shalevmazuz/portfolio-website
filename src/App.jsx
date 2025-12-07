import React from 'react'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Education from './components/Education'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Education />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default App