import "../css/Nav.css";
import { useLanguage } from "../context/LanguageContext";

function Nav() {
  const { t, toggleLanguage, lang } = useLanguage();
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#skills" className="nav-link">
            {t.nav.skills}
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            {t.nav.projects}
          </a>
        </li>
        <li>
          <a href="#" download className="body-text btn orange-btn">
            <i
              className="bi bi-file-earmark-arrow-down btn-icon"
              aria-hidden="true"
            />
            {t.nav.cv}
          </a>
        </li>
        <li>
          <button onClick={toggleLanguage}>
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
