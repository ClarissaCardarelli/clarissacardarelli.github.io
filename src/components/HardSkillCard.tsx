import { Icon } from "@iconify/react";

function HardSkillCard({ skill, icon }) {
  return (
    <div className="hard-skill-card">
      <Icon icon={icon} className="skill-icon" />
      <p className="body-text">{skill}</p>
    </div>
  );
}

export default HardSkillCard;
