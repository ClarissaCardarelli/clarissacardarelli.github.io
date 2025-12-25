import { useLanguage } from "../context/LanguageContext";
import "../css/Projects.css";
import Projects_data from "../data/Projects_data";
import ProjectCard from "./ProjectCard";
import useEmblaCarousel from "embla-carousel-react";

function Projects() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const projects = Projects_data.map((p) => ({
    ...p,
    description: t.projects[p.descriptionKey as keyof typeof t.projects],
  }));

  return (
    <section id="projects">
      <h2 className="secondary-title">
        {t.projects.title}
        <span className="gradient-text">{t.projects.subtitle}</span>
      </h2>

      <section className="project-card-container">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((p) => (
              <div className="embla__slide" key={p.title}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <button
        type="button"
        className="carousel-arrow left"
        onClick={() => emblaApi?.scrollPrev()}
      >
        prev
      </button>
      <button
        type="button"
        className="carousel-arrow right"
        onClick={() => emblaApi?.scrollNext()}
      >
        next
      </button>
    </section>
  );
}

export default Projects;
