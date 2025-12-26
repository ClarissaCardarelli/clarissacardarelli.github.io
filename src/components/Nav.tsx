import "../css/Nav.css";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

function Nav() {
  const { t } = useLanguage();
  return (
    <nav className="nav">
      <ul>
        <li className="nav-title">
          <p>{t.nav.title}</p>
        </li>
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
      </ul>
      <div className="lang-container">
        <LanguageSwitch />
      </div>
    </nav>
  );
}

export default Nav;
