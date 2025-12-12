import "../css/Skills.css";
import HardSkillCard from "./HardSkillCard";

function Skills() {
  const allSkills = [
    { icon: "devicon:html5", skill: "HTML" },
    { icon: "devicon:css3", skill: "CSS" },
    { icon: "devicon:javascript", skill: "JavaScript" },
    { icon: "devicon:typescript", skill: "TypeScript" },
    { icon: "devicon:react", skill: "React" },
    { icon: "devicon:nodejs", skill: "Node.js" },
    { icon: "devicon:express", skill: "Express" },
    { icon: "devicon:mysql", skill: "MySQL" },
    { icon: "devicon:git", skill: "Git" },
    { icon: "devicon:github", skill: "GitHub" },
    // { icon: "devicon:docker", skill: "Docker" },
    { icon: "devicon:figma", skill: "Figma" },
  ];

  return (
    <section id="skills">
      <h2 className="secondary-title">
        Mes <span className="gradient-text">Compétences</span>
      </h2>

      <div className="skill-container">
        {allSkills.map((s) => (
          <HardSkillCard key={s.skill} skill={s.skill} icon={s.icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
