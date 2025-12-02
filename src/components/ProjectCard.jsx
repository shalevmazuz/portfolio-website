const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="div-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="card-tags">
                    {project.techStack.map((item) => {
                        return <span key={project.id} className="tech-tag">{item}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard