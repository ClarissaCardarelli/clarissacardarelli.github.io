function SoftSkillMenu() {
  const softSkills = [
    {
      title: "Adaptabilité",
      color1: "--accent-teal",
      color2: "--accent-blue",
      icon: "bi bi-shuffle",
    },
    {
      title: "Résolution",
      color1: "--accent-orange",
      color2: "--accent-blue",
      icon: "bi bi-exclamation-circle",
    },
    {
      title: "Collaboration",
      color1: "--accent-orange",
      color2: "--accent-teal",
      icon: "bi bi-people",
    },
    {
      title: "Organisation",
      color1: "--accent-teal",
      color2: "--accent-blue",
      icon: "bi bi-clock",
    },
    {
      title: "Communication",
      color1: "--accent-orange",
      color2: "--accent-blue",
      icon: "bi bi-chat",
    },
    {
      title: "Précision",
      color1: "--accent-orange",
      color2: "--accent-teal",
      icon: "bi bi-check2-circle",
    },
  ];

  return (
    <>
      <div className="soft-menu-container">
        <h3 className="section-title">Savoir-être</h3>
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
