import "../css/Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Projet en cours",
      description:
        "Un cahier de liaison digital. Front office et back office permettant de mettre en relation les parents et les enseignants.",
      tags: ["React", "CSS", "Express"],
      image: "../src/assets/images/clay-banks-lGWmTzCyEB8-unsplash.jpg",
    },
    {
      title: "Purrrfect Brews",
      description: "lorem",
      tags: ["React", "CSS", "Express"],
      image: "../src/assets/images/clay-banks-lGWmTzCyEB8-unsplash.jpg",
    },
    {
      title: "CinéMood",
      description:
        "Recommandations de films personnalisées via un quiz interactif, accompagnées d'un catalogue de films consultable.",
      tags: ["React", "TypeScript", "CSS"],
      image: "../src/assets/images/clay-banks-lGWmTzCyEB8-unsplash.jpg",
    },
    {
      title: "Portfolio",
      description:
        "Ce site. Présentation de mes projets, compétences et expérience en tant que développeur web.",
      tags: ["React", "TypeScript", "CSS"],
      image: "../src/assets/images/clay-banks-lGWmTzCyEB8-unsplash.jpg",
    },
  ];

  return (
    <section id="projects">
      <h2 className="secondary-title">
        Mes <span className="gradient-text">Projets</span>
      </h2>
      <div className="project-card-container">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
