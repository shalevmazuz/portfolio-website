import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'
import './ProjectsSection.css'

const ProjectsSection = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Selected Work</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection