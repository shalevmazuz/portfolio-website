import './ProjectCard.css'

const ProjectCard = ({ project }) => {

    const handleClick = () => {
        window.open(project.url, '_blank');
    };

    return (
        <div className="project-card" onClick={handleClick}>
            <img className="card-image" src={project.imageUrl} alt={project.title} />
            <div className="card-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="card-tags">
                    {project.techStack.map((item, index) => {
                        return <span key={index} className="tech-tag">{item}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard