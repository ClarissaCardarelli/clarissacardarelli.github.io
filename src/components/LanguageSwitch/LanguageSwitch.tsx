import { useState } from "react";
import "./LanguageSwitch.css";
import { useLanguage } from "../../context/LanguageContext";
import type { Language } from "../../i18n/translations";

const flags: Record<Language, string> = {
  en: "/flags/uk.png",
  fr: "/flags/fr.png",
};

const languages: Record<Language, string> = {
  en: "English",
  fr: "Français",
};

function LanguageSwitch() {
  const { lang, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedLang: Language) => {
    if (selectedLang !== lang) toggleLanguage();
    setOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button onClick={() => setOpen(!open)}>
        <img src={flags[lang]} alt={languages[lang]} />
      </button>

      {open && (
        <div className="dropdown-menu">
          {(["fr", "en"] as Language[])
            .filter((l) => l !== lang)
            .map((l) => (
              <div key={l} onClick={() => handleSelect(l)}>
                <img src={flags[l]} alt={languages[l]} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;
