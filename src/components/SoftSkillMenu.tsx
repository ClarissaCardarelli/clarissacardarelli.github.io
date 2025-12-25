import { useLanguage } from "../context/LanguageContext";

function SoftSkillMenu() {
  const { t } = useLanguage();

  const softSkills = [
    {
      title: t.softSkills.soft1,
      color1: "--accent-teal",
      color2: "--accent-blue",
      icon: "bi bi-shuffle",
    },
    {
      title: t.softSkills.soft2,
      color1: "--accent-orange",
      color2: "--accent-blue",
      icon: "bi bi-exclamation-circle",
    },
    {
      title: t.softSkills.soft3,
      color1: "--accent-orange",
      color2: "--accent-teal",
      icon: "bi bi-people",
    },
    {
      title: t.softSkills.soft4,
      color1: "--accent-teal",
      color2: "--accent-blue",
      icon: "bi bi-clock",
    },
    {
      title: t.softSkills.soft5,
      color1: "--accent-orange",
      color2: "--accent-blue",
      icon: "bi bi-chat",
    },
    {
      title: t.softSkills.soft6,
      color1: "--accent-orange",
      color2: "--accent-teal",
      icon: "bi bi-check2-circle",
    },
  ];

  return (
    <>
      <div className="soft-menu-container">
        <h3 className="section-title">{t.skills.soft}</h3>
        <ul>
          {softSkills.map((skill, index) => (
            <li
              key={index}
              style={
                {
                  "--color1": `var(${skill.color1})`,
                  "--color2": `var(${skill.color2})`,
                } as React.CSSProperties
              }
            >
              <span className="icon">
                <i className={skill.icon} />
              </span>
              <span className="body-text title">{skill.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SoftSkillMenu;
