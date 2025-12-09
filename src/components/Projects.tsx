import "../css/Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <h2 className="secondary-title">
        Mes <span className="gradient-text">Projets</span>
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px",
          gap: "20px",
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
