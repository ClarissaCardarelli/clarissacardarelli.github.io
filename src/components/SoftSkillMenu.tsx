function SoftSkillMenu() {
  const softSkills = [
    {
      title: "Adaptabilité",
      color1: "#a955ff",
      color2: "#ea51ff",
      icon: "bi bi-shuffle",
    },
    {
      title: "Résolution",
      color1: "#56CCF2",
      color2: "#2F80ED",
      icon: "bi bi-exclamation-circle",
    },
    {
      title: "Collaboration",
      color1: "#FF9966",
      color2: "#FF5E62",
      icon: "bi bi-people",
    },
    {
      title: "Organisation",
      color1: "#80FF72",
      color2: "#7EE8FA",
      icon: "bi bi-clock",
    },
    {
      title: "Communication",
      color1: "#ffa9c6",
      color2: "#f434e2",
      icon: "bi bi-chat",
    },
    {
      title: "Précision",
      color1: "#ffa9c6",
      color2: "#f434e2",
      icon: "bi bi-check2-circle",
    },
  ];

  return (
    <>
      <div className="soft-menu-container">
        <ul>
          {softSkills.map((skill, index) => (
            <li
              key={index}
              style={{ "--i": skill.color1, "--j": skill.color2 }}
            >
              <span className="icon">
                <i className={skill.icon} />
              </span>
              <span className="title">{skill.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SoftSkillMenu;
