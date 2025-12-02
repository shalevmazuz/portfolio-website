import React from 'react'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default App