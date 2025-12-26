import { useState } from "react";
import "../css/Skills.css";
import FilterButton from "./FilterButton";
import HardSkillCard from "./HardSkillCard";
import SoftSkillMenu from "./SoftSkillMenu";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { t } = useLanguage();

  const allSkills = [
    { icon: "devicon:html5", skill: "HTML", category: "Front" },
    { icon: "devicon:css3", skill: "CSS", category: "Front" },
    { icon: "devicon:javascript", skill: "JavaScript", category: "Front" },
    { icon: "devicon:typescript", skill: "TypeScript", category: "Front" },
    { icon: "devicon:react", skill: "React", category: "Front" },

    { icon: "devicon:nodejs", skill: "Node.js", category: "Back" },
    { icon: "devicon:express", skill: "Express", category: "Back" },
    { icon: "devicon:mysql", skill: "MySQL", category: "Back" },
    { icon: "mdi:api", skill: "REST APIs", category: "Back" },

    { icon: "devicon:git", skill: "Git", category: "Tools" },
    { icon: "devicon:github", skill: "GitHub", category: "Tools" },
    { icon: "devicon:vscode", skill: "VS Code", category: "Tools" },
    { icon: "devicon:figma", skill: "Figma", category: "Design" },
  ];

  const filterBtns = [
    { name: t.skills.all, value: "" },
    { name: t.skills.frontend, value: "Front" },
    { name: t.skills.backend, value: "Back" },
    { name: t.skills.tools, value: "Autre" },
  ];

  const [filter, setFilter] = useState("");

  return (
    <section id="skills">
      <h2 className="secondary-title">
        {t.skills.title}
        <span className="gradient-text">{t.skills.subtitle}</span>
      </h2>

      <h3 className="section-title">{t.skills.technical}</h3>

      <div className="filter-buttons-container">
        {filterBtns.map((skill) => (
          <FilterButton
            key={skill.name}
            className={
              filter == skill.value
                ? "body-text filter-button active"
                : "body-text filter-button"
            }
            text={skill.name}
            value={skill.value}
            handleFilterUpdate={setFilter}
          />
        ))}
      </div>

      <div className="hard-skills-container">
        {allSkills
          .filter((s) => {
            if (filter === "Autre") {
              return s.category === "Tools" || s.category === "Design";
            }
            return !filter || s.category === filter;
          })
          .map((s) => (
            <HardSkillCard key={s.skill} skill={s.skill} icon={s.icon} />
          ))}
      </div>

      <SoftSkillMenu />
    </section>
  );
}

export default Skills;
