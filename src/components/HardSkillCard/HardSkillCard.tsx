import { Icon } from "@iconify/react";
import "./HardSkillCard.css";

interface HardSkillCardProps {
  skill: string;
  icon: string;
}

function HardSkillCard({ skill, icon }: HardSkillCardProps) {
  return (
    <div className="hard-skill-card">
      <Icon icon={icon} className="skill-icon" />
      <p className="body-text">{skill}</p>
    </div>
  );
}

export default HardSkillCard;
