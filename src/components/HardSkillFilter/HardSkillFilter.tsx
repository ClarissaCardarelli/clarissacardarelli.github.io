import "./HardSkillFilter.css";

interface FilterButtonsProps {
  className: string;
  text: string;
  value: string;
  handleFilterUpdate: (value: string) => void;
}

function HardSkillFilter({
  className,
  text,
  value,
  handleFilterUpdate,
}: FilterButtonsProps) {
  return (
    <button
      className={className}
      onClick={() => {
        handleFilterUpdate(value);
      }}
    >
      {text}
    </button>
  );
}

export default HardSkillFilter;
