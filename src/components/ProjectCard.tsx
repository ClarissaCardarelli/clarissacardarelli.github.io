function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={project.image} alt="hello" />
      </div>
      <article>
        <h3 className="section-title">{project.title}</h3>
        <p className="body-text">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export default ProjectCard;
