import { useLanguage } from "../context/LanguageContext";

function ProjectCard({
  project: { title, description, tags, image, ghLink, demo },
}) {
  const { t } = useLanguage();
  return (
    <div className="project-card">
      <div className="project-img-container">
        {image ? (
          <img src={image} alt="" />
        ) : (
          <p className="secondary-title temp-project">{t.projects.encours}</p>
        )}

        <div className="project-links-container">
          {!demo && !ghLink && (
            <a
              href={demo}
              className="body-text project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.noLinks}
            </a>
          )}

          {demo && (
            <a
              href={demo}
              className="body-text project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
              {t.projects.demo}
            </a>
          )}

          {ghLink && (
            <a
              href={ghLink}
              className="body-text project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
      <article>
        <h3 className="section-title">{title}</h3>
        <p className="body-text">{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
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
